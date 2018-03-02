import React, { Component } from 'react';
import {connect} from "react-redux";
import { deleteItemToList, changeActiveItem, editItem } from './actions.js';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {cyan500} from "material-ui/styles/colors";

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
            this.props.onEditItem(this.state.inputText, this.props.itemList.id);
            this.props.onChangeActiveItem("");
            this.setState({
                inputText: ''
            });
        }
    }

    _changeActiveItem = (id) => {
        this.props.onChangeActiveItem(id);
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        const { itemList } = this.props;
        const styles = {
            color: {
                color: cyan500
            }
        };

        console.log(itemList)
        return (
            <div>
                <div className='block-item'>
                    <div className='input-wrap' onDoubleClick={ () => this._changeActiveItem(itemList.id)} >
                        <TextField
                            fullWidth={true}
                            id={'text' + itemList.id}
                            value={ this.state.inputText || itemList.name  }
                            onChange={(event) => this.handleChange(event)}
                            onKeyDown={ (e) => this._handleKeyPress(e)}
                            disabled = {(this.props.itemListActive === itemList.id) ? false : true}
                        />
                    </div>
                    <IconButton onClick={ () => this._deleteItem(itemList.id) } iconStyle={styles.color}>
                        <i className="material-icons">delete_forever</i>
                    </IconButton>
                </div>
                <Divider />
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
        itemListActive: state.listReducer.itemListActive
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);
