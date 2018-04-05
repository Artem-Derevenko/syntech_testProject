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
            authorText: '',
            bookText: ''
        };
    }

    _deleteItem = (id) => {
        this.props.onDeleteItem(id);
    }

    _handleKeyPress = (e) => {
        if ( e.keyCode === 13 ) {
            this.props.onEditItem(this.state.authorText, this.state.bookText, this.props.itemList.id);
            this.props.onChangeActiveItem("");
            this.setState({
                authorText: '',
                bookText: ''
            });
        }
    }

    _changeActiveItem = (id) => {
        this.props.onChangeActiveItem(id);
    }

    handleChange = (event, value) => {
        switch(value) {
            case 'author':
                this.setState({
                    authorText: event.target.value
                });
                break;

            case 'book':
                this.setState({
                    bookText: event.target.value
                });
                break;
        }
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
                            id={'author' + itemList.id}
                            value={ this.state.authorText || itemList.author  }
                            onChange={(event) => this.handleChange(event, 'author')}
                            onKeyDown={ (e) => this._handleKeyPress(e)}
                            disabled = {(this.props.itemListActive === itemList.id) ? false : true}
                        />
                        <TextField
                            fullWidth={true}
                            id={'book' + itemList.id}
                            value={ this.state.bookText || itemList.name  }
                            onChange={(event) => this.handleChange(event, 'book')}
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
        onEditItem: (author, name, id) => {
            dispatch(editItem(author, name, id));
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
