import BillService from "../BillService";
import { useState } from "react";
import { useEffect } from "react";

import "./UserHistory.css";
const UserHistory = (props) => {
  const [voteHistory, setVoteHistory] = useState([]);
  var userid = props.userID;
  var rollcall = {}
  var history = []
  var congress = window.localStorage.getItem('congress')

  const filtervotes = (value, index, array) => {
    var billList = array.map((value) => {
      return value.bill_id;
    });
    var voteList = array.map((value) => {
      return value.vote;
    });
    return (
      billList.indexOf(value.bill_id) == index ||
      voteList[billList.indexOf(value.bill_id)] != value.vote)
      ;
  };

  console.log(congress)
  // BillService.getVotes(congress, 'house', 1, 208).then((response) => {
  //   console.log(response)
  // })
  const getRollCall = () => {
    // BillService.getBill(congress, bill).then((response) => {
    //   console.log(congress)
    voteHistory.map((value) => {
      BillService.getBill(congress, value.bill_id).then((response) => {
        rollcall.push(response.results[0].votes[0].roll_call)
        console.log(rollcall)
        BillService.getVotes(congress, 'senate', 1, response.results[0].votes[0].roll_call).then((response) => {
          console.log(response)
        })
      })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
    )

  }



  useEffect(() => {
    BillService.getUserVotes("votes", userid[0]).then((response) => {
      console.log(response.data.filter(filtervotes));
      setVoteHistory(response.data.filter(filtervotes))


      response.data.filter(filtervotes).map((value) => {
        console.log(value.bill_id)
        BillService.getBill(congress, value.bill_id).then((response) => {
          rollcall = { ...rollcall, [value.bill_id]: response.results[0].votes[0].roll_call }
          console.log(rollcall)
        })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      })
    }
    )
      .catch((error) => {
        console.error("There was an error!", error);
      });
    console.log(voteHistory)
  }
    , []);

  console.log(history)
  return (
    <div id='tableContainer'>
      <div className='voteHeader'>
        <div className="voteData">Bill ID</div>
        <div className="voteData" >Vote</div>
      </div>
      <div>{voteHistory.map((vote) => {

        return (
          <div className="voteTable">
            <div className="voteData">{vote.bill_id}</div>
            <div className="voteData">{vote.vote}</div>
          </div>
        )
      })}</div>
    </div>
  )


  return <div>{ }</div>;
};
export default UserHistory;
