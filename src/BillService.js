import axios from "../../../../Desktop/Software_Engineering/SE_Homework/node_modules/axios";
class BillService {
  getVotes(congress, chamber, session, rollcall) {
    fetch(
      "https://api.propublica.org/congress/v1/" +
        congress +
        "/" +
        chamber +
        "/sessions/" +
        session +
        "/votes/" +
        rollcall +
        ".json",
      {
        method: "GET",
        headers: {
          "X-API-Key": process.env.REACT_APP_KEY,
        },
      }
    ).then((response) => response.json());
  }

  getCongressBills(congress, chamber, type) {
    return fetch(
      "https://api.propublica.org/congress/v1/" +
        congress +
        "/" +
        chamber +
        "/bills/" +
        type +
        ".json",
      {
        method: "GET",
        headers: {
          "X-API-Key": "x21D3Kn7IXjn4xoK8Yrr3ZKO1M0490xEjXPxo5Z2",
        },
      }
    ).then((response) => response.json());
  }
  getBill(congress, bill) {
    return fetch(
      "https://api.propublica.org/congress/v1/" +
        congress +
        "/bills/" +
        bill +
        ".json",
      {
        method: "GET",
        headers: {
          "X-API-Key": "x21D3Kn7IXjn4xoK8Yrr3ZKO1M0490xEjXPxo5Z2",
        },
      }
    ).then((response) => response.json());
  }
  submitVote(bill, vote, table,user) {
    console.log(bill);

    axios.post("http://localhost:8081/api/" + table, {
        bill_id: bill.toString(),
        vote: vote.toString(),
        user_name: bill,
        user_password: vote,
        userid:user
      })
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error);
      });

    // this is to add to user table. it is not complete
    // axios.post("http://localhost:8081/api/users"),
    //   {
    //     user_votes: vote,
    //     user_history: bill,
    //   };
  }
  getUserVotes(table,username) {
    return axios.get("http://localhost:8081/api/" + table + "/" + username);
  }
  addVote(votes, userID) {
    axios.put("http://localhost:8081/api/users/" + userID, {
      user_votes: votes,
    });
  }
}
export default new BillService();
