import React, { Component } from 'react';
import Button from '../../../../components/Button/Button.jsx';
import { connect } from 'react-redux';
import { showList, addItemToList } from './actions.js';

class Panel extends Component {
    // _showList = (show) => {
    //     this.props.onShowList(show);
    // }

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

        //<Button
        //     className="button-primery"
        //     event={ () => this._showList(true) }
        //     eventName = 'Показать список'
        // />

        return (
            <div>
                <input className="input"  type="text" onKeyDown={ (e) => this._handleKeyPress(e)} />
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
