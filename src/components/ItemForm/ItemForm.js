import React, { Component } from 'react'
import './ItemForm.css'
import { connect } from 'react-redux';
class ItemForm extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_ITEMS' })
        console.log(this.props.state)
    }
    state = {
        description: '',
        items: ''
    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    firePayload = () => {
        this.props.dispatch({ type: 'FETCH_ITEMS', payload: this.state.description })
        this.setState({
            description: '',
            url: ''
        })
    }
    addToShelf = () => {
        this.firePayload()
    }
    render() {
        return (
            <div className='wrapper'>
                <h3>Learn about dnd items</h3>
                {this.props.list ?
                    <p>
                        name:  {<br />}
                        {this.props.list.name}
                        {<br />}
                    description:  {<br />}
                        {this.props.list.desc}
                        {<br />}
                    cost:  {<br />}
                        {JSON.stringify(this.props.list.cost)}
                        {<br />}
                    weapon catagory:   {<br />}
                        {this.props.list.weapon_category}
                        {<br />}
                    damage:  {<br />}
                        {JSON.stringify(this.props.list.damage)}
                        {<br />}
                    armor class:   {<br />}
                        {JSON.stringify(this.props.list.armor_class)}
                        {<br />}
                    Catagory:{<br />}
                        {JSON.stringify(this.props.list.equipment_category)}
                    </p>
                    :
                    <h3>pick an item!</h3>
                }
                <select value={this.state.description} id='desc' placeholder='Item Description' onChange={(event) => this.handleChange(event, 'description')}>
                    {this.props.items.map(item => (<option key={item.index} value={item.index}>{item.name}</option>))}
                </select>
                <br />
                <br />
                <button onClick={this.addToShelf}>Add To Shelf</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.list.getItemReducer,
    list: state.list.getListReducer
});

export default connect(mapStateToProps)(ItemForm);