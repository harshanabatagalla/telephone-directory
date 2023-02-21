import React from "react";
import { Component } from "react";
import Header from "./Header";
import "./AddSubscriber.css"

class AddSubscriber extends React.Component {
    render() {
        return (
            <div>
                <Header headding="Add subscriber" />
                <button className="button-back">Back</button>
                <div className="item-container">
                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control"> Name </label> 
                        <input id="name" type="text" placeholder="Harshana Batagalla" className="input-control" /> <br /><br />

                        <label htmlFor="phone" className="label-control"> Phone</label> 
                        <input id="phone" type="text" placeholder="03698877785 " className="input-control" /> <br /><br />
                        
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">
                                Subscriber to be added:
                            </span> <br/>
                            <span className="subscriber-info">Name:</span> <br/>
                            <span className="subscriber-info">Phone:</span>
                        </div>
                        <button type="submit" className="button-add-sub">ADD</button>
                   
                    </form>
                </div>

            </div>
        );
    }
}

export default AddSubscriber; 