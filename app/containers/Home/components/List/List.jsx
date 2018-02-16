import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import { connect } from 'react-redux';
import './List.scss';

class List extends Component {
    render() {
        const { list } = this.props; console.log(list)
        const sortList = list.sort(function(a, b) {
            var aTime = new Date(a.date);
            var bTime = new Date(b.date);
            return (bTime - aTime);
        });
        return (
            <div className='list' id="list">
                {
                    sortList.map( (item, i) => <ListItem key={i} itemList={item} /> )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
    }
};

export default connect(
    mapStateToProps
)(List);