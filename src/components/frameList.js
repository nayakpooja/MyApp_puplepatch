/**
 * Created by pooja on 3/8/17.
 */

var React = require('react');
var ListedItems = React.createClass({

    listedItems(){
        console.log("in")
    var listItemToBeDisplayed=[];
        var outerThis= this;
this.props.data.forEach(function(item){
    listItemToBeDisplayed.push(<li  className={outerThis.props.classNameForList}>{item}</li>)
})
        return listItemToBeDisplayed;
},

    render(){
    return(<div>
            <ul className= "custom-bullet" >
                {this.listedItems()}
            </ul>
    </div>
    )}
})

module.exports = ListedItems;