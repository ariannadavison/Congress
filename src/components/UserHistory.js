import BillService from "../BillService";
import { useState } from "react";
import { useEffect } from "react";

import "./UserHistory.css";
const UserHistory = (props) => {
  const [voteHistory, setVoteHistory] = useState([]);
  var userid = props.userID;
  var history = []

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





  useEffect(() => {
    BillService.getUserVotes("votes", userid[0]).then((response) => {
      console.log(response.data.filter(filtervotes));
      setVoteHistory(response.data.filter(filtervotes))

    })
  }, []);

  console.log(history)
  return (
    <div id='tableContainer'>
      <div className='voteHeader'>
        <div className="voteData">Bill ID</div>
        <div className="voteData">Vote</div>
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
