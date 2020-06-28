import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from "../Item/Item"

class ItemList extends Component {

  componentDidMount = () =>{
    // this.props.dispatch({
    //   type: 'FETCH_ITEMS'
    // })
  }

  render() {
    return (
      <div className="shelf">
        {/* {this.props.list &&
        this.props.list.map((item)=>
        <Item key={item.id} item={item}/>)
      } */}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  list: state.list
});

export default connect(mapStateToProps)(ItemList);