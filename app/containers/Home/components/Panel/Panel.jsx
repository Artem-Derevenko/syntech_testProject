import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList, addItemToList } from './actions.js';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './Panel.scss';

class Panel extends Component {
    _AddItem = (id, name, date) => {
        this.props.onAddItem(id, name, date);
    }

    _handleKeyPress = (e) => {
        if ( e.keyCode === 13 ) {
            const date = new Date();
            const textInput = e.target.value;
            const maxId = this.props.list.reduce(function(max, item) {
                return (item.id > max) ? (max = item.id) : max;
            }, 0);
            this._AddItem(maxId + 1, textInput, date.toUTCString());
            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} className="panel">
                    <TextField
                        floatingLabelText="Введите название ногово элемента"
                        fullWidth={true}
                        onKeyDown={ (e) => this._handleKeyPress(e)}
                    />
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowList: (show) => {
            dispatch(showList(show));
        },
        onAddItem: (id, name, date) => {
            dispatch(addItemToList(id, name, date));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);
