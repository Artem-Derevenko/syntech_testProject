import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import './List.scss';

class List extends Component {
    render() {
        const { page, list, search } = this.props;

        const searchList = list.filter(function(item) {
            return ( (item.name.indexOf(search) + 1) || (item.author.indexOf(search) + 1));
        });

        const sortList = searchList.sort(function(a, b) {
            var aTime = new Date(a.date);
            var bTime = new Date(b.date);
            return (bTime - aTime);
        });

        const startItem = (page -1)*5;
        const endtItem = (page*5 > sortList.length) ? sortList.length : page*5;

        return (
            <div className='list-wrap'>
                <Paper zDepth={2} className='list' id="list">
                    {
                        (sortList.length > 0)
                            ? ( sortList.slice(startItem, endtItem).map(
                                (item, i) => (<ListItem key={i} itemList={item} name={item.name} />) ))
                            : (<div className='block-item'>По данному запросу ничего не найдено!</div>)
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
        page: state.listReducer.page,
        search: state.listReducer.search
    }
};

export default connect(
    mapStateToProps
)(List);