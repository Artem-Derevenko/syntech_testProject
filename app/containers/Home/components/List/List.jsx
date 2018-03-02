import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import './List.scss';

class List extends Component {
    render() {
        const { page, list } = this.props;
        const sortList = list.sort(function(a, b) {
            var aTime = new Date(a.date);
            var bTime = new Date(b.date);
            return (bTime - aTime);
        });
        const startItem = (page -1)*5;
        const endtItem = (page*5 > sortList.length) ? sortList.length : page*5;
console.log(sortList.slice(startItem, endtItem))
        return (
            <div className='list-wrap'>
                <Paper zDepth={2} className='list' id="list">
                    {
                        sortList.slice(startItem, endtItem).map( (item, i) => (<ListItem key={i} itemList={item} name={item.name} />) )
                    }
                </Paper>
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