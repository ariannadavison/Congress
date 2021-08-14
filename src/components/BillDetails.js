import { Link } from 'react-router-dom'
import React, { Component } from 'react'

import BillService from '../BillService'
class BillDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: window.localStorage.getItem('id'),
            bill: [],
            congress: window.localStorage.getItem('congress'),
            summary: '',
            title: '',
            subject: '',
            rollcall: 0,
            slug: '',
        }
        this.componentDidMount = this.componentDidMount.bind(this)

    }

    componentDidMount() {

        console.log(this.props.billID)

        console.log(this.state.congress)
        BillService.getBill(this.state.congress, this.state.id).then((response) => {
            console.log(response)
            this.setState({
                // congress: window.localStorage.getItem('selectedbill')[0],
                // id: window.localStorage.getItem('selectedbill')[1],
                // rollcall: response.results[0].votes[0].roll_call,
                bill: response.results[0],
                title: response.results[0].short_title,
                subject: response.results[0].primary_subject,
                summary: response.results[0].summary_short,
                slug: response.results[0].bill_slug,
            })

        })
        console.log(this.state.id)
    }



    render() {
        return (
            <div className="billDetails"  >
                <Link to='/Bill'>Bills >  </Link>
                <Link to='BillDetails'>  Details({this.state.id})</Link>
                {/* <div>{bill.bill_id}</div> */}
                <div className="details"><b>{this.state.title}</b></div>
                <div className="details"><i>{this.state.subject}</i></div>
                <div className="details">{this.state.summary}</div>

                <div>
                    <button onClick={() => { BillService.submitVote(this.state.id, "Y", "votes", this.props.userID[0]); console.log(this.props.userID[0]) }}>VOTE YES</button>
                    <button onClick={() => { BillService.submitVote(this.state.id, "N", "votes", this.props.userID[0]); console.log(this.props.userID[0]) }}>VOTE NO</button>
                </div>
            </div>
            // < div >
            //     <div id="bills">{this.state.bill.map((bill) => {

            //         return (




            //         )

            //     }
            //     )
            //     }</div>
            //     <div id='members'></div>
            //     <div id='rollcall'></div>
            // </div >
        )
    }
}

export default BillDetails