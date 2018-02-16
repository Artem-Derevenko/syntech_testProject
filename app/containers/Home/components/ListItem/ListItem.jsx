import React, { Component } from 'react';
import {connect} from "react-redux";
import { deleteItemToList, changeActiveItem, editItem } from './actions.js';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }
    _deleteItem = (id) => {
        this.props.onDeleteItem(id);
    }

    _handleKeyPress = (e) => {
        if ( e.keyCode === 13 ) {
            this.props.onEditItem(e.target.value, this.props.itemList.id);
            e.target.value = "";
            this._changeActiveItem('');
        }
    }

    _changeActiveItem = (id) => {
        this.props.onChangeActiveItem(id);
    }

    _changeTextItem = () => {
        const text = event.target.value;
        this.setState({
            inputText: text
        });
    }

    render() {
        const { itemList } = this.props;

        return (
            <div className='block-item'>
                <div className='input-wrap' onDoubleClick={ () => this._changeActiveItem(itemList.id)} >
                    {
                        (this.props.itemListActive === itemList.id)

                            ? <input type="text"  placeholder={itemList.name}
                                     value={this.state.inputText} className="active"
                                     onChange={() => this._changeTextItem()}
                                     onKeyDown={ (e) => this._handleKeyPress(e)} />

                            : <input type="text" value={this.state.inputText} placeholder={itemList.name} className="" disabled />
                    }
                </div>
                <img src='../../../../public/img/icons/delete.png' onClick={ () => this._deleteItem(itemList.id) } className='icon delete'/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteItem: (id) => {
            dispatch(deleteItemToList(id));
        },
        onChangeActiveItem: (id) => {
            dispatch(changeActiveItem(id));
        },
        onEditItem: (name, id) => {
            dispatch(editItem(name, id));
        }
    }
};

const mapStateToProps = state => {
    return {
        itemListActive: state.listReducer.itemListActive,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);
