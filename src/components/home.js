/**
 * Created by pooja on 30/7/17.
 */

'use strict';
var React = require('react');
var Constants = require('../Constants/AppConstants');
var ListedItems = require('./frameList');
var Select = require('react-select');

const FLAVOURS = [
    { label: "Javascript", value: "Javascript" },
    { label: "ReactJS", value: "ReactJS" },
    { label: "HTML", value: "HTML" },
    { label: "CSS", value: "CSS" },
    { label: "Cookies", value: "Cookies" },
    { label: "NodeJs", value: "NodeJs" }
];

var Home = React.createClass({


    getInitialState: function(){
        return{
            options: FLAVOURS,
            value: []
        }
    },

    handleSelectChange :function(value) {
        console.log("val",value)
        const data = value.split(',');
        this.setState({ value: data });
    },

    render:function(){
         return(
             <div >
                 <div className="col-sm-2"></div>
                 <div className="firstSec col-sm-4">
                     <div className="welcomeMsg">Welcome to Technology!!!</div>
                     <ListedItems data= {Constants.listItems} classNameForList="listItem" />
                 </div>
                 <div className="col-sm-1"></div>
             <div className="secondSec col-sm-4">
                <form>
                    <div className="form-group" style={{marginTop:'6%'}}>
                        <label  className="textStyle">First Name <span style={{color:'red'}}>*</span>:</label>
                        <input type="text" className="form-control" style={{width:'80%'}} id="firstname" required/>
                    </div>
                    <div className="form-group">
                        <label  className="textStyle">Last Name:</label>
                        <input type="text" className="form-control" style={{width:'80%'}} id="lastname" />
                    </div>
                    <div className="form-group">
                        <label  className="textStyle">Email address <span style={{color:'red'}}>*</span>:</label>
                        <input type="email" className="form-control" style={{width:'80%'}} id="email" required/>
                    </div>
                    <div className="form-group">
                        <label className="textStyle">Password <span style={{color:'red'}}>*</span>:</label>
                        <input type="password" className="form-control" style={{width:'80%'}} id="pwd" required/>
                    </div>
                    <label className="textStyle">What are your favourite technologies?</label>
                    <Select
                        multi
                        simpleValue
                        value={this.state.value}
                        placeholder="Select your favourite(s)"
                        options={this.state.options}
                        onChange={this.handleSelectChange}
                    />
                    <div>
                        <label className="textStyle">How many years of experience do you have?</label>
                        <input type="number" min="1" max="35" className="form-control" style={{width:'80%'}} id="exp" required/>
                    </div>

                    <button type="submit" className="btn btn-default submitBtn">Submit</button>
                </form>
            </div>
                 <div className="col-sm-1"></div>
            </div>
        )
    }
});

module.exports = Home;