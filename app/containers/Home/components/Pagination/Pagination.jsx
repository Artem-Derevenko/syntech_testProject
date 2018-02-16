import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pagination.scss';
import { changePagination, changePaginationNext, changePaginationPrev } from "../Pagination/actions.js";

class Pagination extends Component {
    _changePagination = (page) => {
        this.props.onChangePagination(page);
    }

    _changePaginationPrev = () => {
        this.props.onChangePaginationPrev();
    }

    _changePaginationNext = () => {
        this.props.onChangePaginationNext();
    }

    render() {
        const { page, list } = this.props;
        const count = Math.ceil(list.length/5);
        const pageList= [];
        for ( let i = 1; i <= count; i++ ) {
            pageList.push(i);
        }

        return (
            <div>
                <ul className="block-pagination">
                    <li className={ (page === 1) ? "prev hide" : "prev" } onClick={ () => this._changePaginationPrev()}>
                        <img src="../../../../public/img/icons/prev.png"/>
                    </li>
                    {
                        pageList.map( (item, ind) => {
                           return (<li key={ind} className={ (item === page) ? "item-pagination active" : "item-pagination" }
                                       onClick={ () => this._changePagination(item)}>{item}</li>)
                        })
                    }
                    <li className={ (page === count) ? "next hide" : "next" } onClick={ () => this._changePaginationNext()}>
                        <img src="../../../../public/img/icons/next.png"/>
                    </li>
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        page: state.listReducer.page,
        list: state.listReducer.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onChangePagination: (page) => {
            dispatch(changePagination(page));
        },
        onChangePaginationPrev: () => {
            dispatch(changePaginationPrev());
        },
        onChangePaginationNext: () => {
            dispatch(changePaginationNext());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination);