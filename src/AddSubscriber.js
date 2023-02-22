import React from "react";
import { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css"

class AddSubscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) =>{
        const state = this.state ;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    render() {
        const{name,phone} = this.state;
        return (
            <div>
                <Header headding="Add subscriber" />
                <button className="button-back">Back</button>
                <div className="item-container">
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control"> Name </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Harshana Batagalla"
                            className="input-control"
                            onChange={this.inputChangedHandler}
                        /> <br /><br />

                        <label htmlFor="phone" className="label-control"> Phone</label>
                        <input 
                        id="phone"
                        name="phone"
                        type="text" 
                        placeholder="03698877785 " 
                        className="input-control" 
                        onChange={this.inputChangedHandler}
                        /> <br /><br />

                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">
                                Subscriber to be added:
                            </span> <br />
                            <span className="subscriber-info">Name: {name}</span> <br />
                            <span className="subscriber-info">Phone: {phone}</span>
                        </div>
                        <button type="submit" className="button-add-sub">ADD</button>

                    </form>
                </div>

            </div>
        );
    }
}

export default AddSubscriber; 