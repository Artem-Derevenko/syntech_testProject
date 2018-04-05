import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pagination.scss';
import { changePagination, changePaginationNext, changePaginationPrev } from "../Pagination/actions.js";
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import { cyan800, cyan500 } from 'material-ui/styles/colors';

class Pagination1 extends Component {
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
        const { page, list, search } = this.props;

        const searchList = list.filter(function(item) {
            return ( (item.name.indexOf(search) + 1) || (item.author.indexOf(search) + 1));
        });

        const count = Math.ceil(searchList.length/5);
        const pageList= [];
        for ( let i = 1; i <= count; i++ ) {
            pageList.push(i);
        }

        let pageList1 = [];
        let pageList2 = [];
        let pageList3 = [];

        if ( count <= 10 ) {
            pageList1 = pageList;
        }

        else {
            if ( page < 5 ) {
                pageList1 = pageList.slice(0, 5);
                pageList3[0] = count;
            }
            if (( page >= 5 ) && ( page <= (count - 4) )) {
                pageList1[0] = '1';
                pageList2 = pageList.slice(page - 3, page + 2);
                pageList3[0] = count;
            }
            if ( page > count - 4 ) {
                pageList1[0] = '1';
                pageList3 = pageList.slice(count-5, count);
            }
        }


        const styles = {
            color: {
                color: cyan500
            },
            colorActive: {
                color: cyan800
            }
        };

        return (
            <div>
                { count == 0 || (
                <ul className="block-pagination">
                    <li className={ (page === 1) ? "hide" : "" }>
                        <FlatButton onClick={ () => this._changePaginationPrev()}
                                    fullWidth={true} primary={true}
                                    icon={<FontIcon className="material-icons">navigate_before</FontIcon>}
                        />
                    </li>
                    {
                        pageList1.map( (item, ind) => {
                           return (<li key={ind} className={ (item === page) ? "active" : "" }>
                                       <FlatButton onClick={ () => this._changePagination(item)} primary={true}
                                                   label={item} fullWidth={true} style={ (item === page) ? styles.colorActive : styles.color } />
                                  </li>)
                        })
                    }

                    {
                        ( count > 10 ) && (<li>...</li>)
                    }

                    {   pageList2 &&
                        (pageList2.map( (item, ind) => {
                            return (<li key={ind} className={ (item === page) ? "active" : "" }>
                                <FlatButton onClick={ () => this._changePagination(item)} primary={true}
                                            label={item} fullWidth={true} style={ (item === page) ? styles.colorActive : styles.color } />
                            </li>)
                        }))
                    }

                    {
                        ( pageList2.length > 0 ) && (<li>...</li>)
                    }

                    {  pageList3 &&
                        ( pageList3.map( (item, ind) => {
                            return (<li key={ind} className={ (item === page) ? "active" : "" }>
                                <FlatButton onClick={ () => this._changePagination(item)} primary={true}
                                            label={item} fullWidth={true} style={ (item === page) ? styles.colorActive : styles.color } />
                            </li>)
                        }))
                    }
                    <li className={ (page === count) ? "hide" : "" }>
                        <FlatButton onClick={ () => this._changePaginationNext()}
                                    fullWidth={true} primary={true}
                                    icon={<FontIcon className="material-icons" >navigate_next</FontIcon>}
                        />
                    </li>
                </ul> )}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        page: state.listReducer.page,
        list: state.listReducer.list,
        search: state.listReducer.search
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
)(Pagination1);