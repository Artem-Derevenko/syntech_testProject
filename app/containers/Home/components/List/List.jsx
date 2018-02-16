import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { connect } from 'react-redux';
import './List.scss';

class List extends Component {
    render() {
        const { page, list } = this.props; console.log(list)
        const sortList = list.sort(function(a, b) {
            var aTime = new Date(a.date);
            var bTime = new Date(b.date);
            return (bTime - aTime);
        });
        const startItem = (page -1)*5;
        const endtItem = (page*5 > sortList.length) ? sortList.length : page*5;

        return (
            <div className='list-wrap'>
                <div className='list' id="list">
                    {
                        sortList.slice(startItem, endtItem).map( (item, i) => <ListItem key={i} itemList={item} /> )
                    }
                </div>
                <Pagination />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
        page: state.listReducer.page
    }
};

export default connect(
    mapStateToProps
)(List);