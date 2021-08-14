import React, { Component } from 'react'
import BillService from '../BillService'
import { Link } from 'react-router-dom'
import './Bill.css'
class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: 'both',
            subject: '',
            congress: 117,
            session: 0,
            bills: [],
            billid: "",

            description: '',
            rollcall: 0,
            title: '',
            targetId: "",
            index: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.selectBill = this.selectBill.bind(this)
    }

    componentDidMount(data) {


        BillService.getCongressBills(this.state.congress, this.state.chamber, "passed").then((response) => {
            console.log(response.results[0])
            this.setState({ bills: response.results[0].bills, congress: response.results[0].congress })
            console.log(this.props.billID)
        })

    }
    selectBill(bill) {


        console.log(bill)

        this.props.setBillID(bill)
        this.props.setCongress(this.state.congress)



    }
    render() {
        console.log(this.state.bills[0])
        return (


            < div >
                <div id="bills">{this.state.bills.map((bill) => {

                    return (

                        <div className="billblock" id={bill.bill_slug} onClick={() => {
                            this.props.setBillID(bill.bill_slug)
                            this.props.setCongress(this.state.congress)
                            window.localStorage.setItem('congress', this.state.congress)
                            window.localStorage.setItem('id', bill.bill_slug)

                        }}>
                            <Link className='detailsLink' to="/BillDetails">

                                {/* <div>{bill.bill_id}</div> */}
                                <div><b>{bill.short_title}</b></div>
                                <div><i>{bill.primary_subject}</i></div>
                                {/* <div>{bill.summary}</div> */}

                            </Link>
                        </div>
                    )

                }
                )
                }</div>
                <div id='members'></div>
                <div id='rollcall'></div>
            </div >
        )
    }
}
export default Bill