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
        const { page, list } = this.props;
        const count = Math.ceil(list.length/5);
        const pageList= [];
        for ( let i = 1; i <= count; i++ ) {
            pageList.push(i);
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
                <ul className="block-pagination">
                    <li className={ (page === 1) ? "hide" : "" }>
                        <FlatButton onClick={ () => this._changePaginationPrev()}
                                    fullWidth={true} primary={true}
                                    icon={<FontIcon className="material-icons">navigate_before</FontIcon>}
                        />
                    </li>
                    {
                        pageList.map( (item, ind) => {
                           return (<li key={ind} className={ (item === page) ? "active" : "" }>
                                       <FlatButton onClick={ () => this._changePagination(item)} primary={true}
                                                   label={item} fullWidth={true} style={ (item === page) ? styles.colorActive : styles.color } />
                                  </li>)
                        })
                    }
                    <li className={ (page === count) ? "hide" : "" }>
                        <FlatButton onClick={ () => this._changePaginationNext()}
                                    fullWidth={true} primary={true}
                                    icon={<FontIcon className="material-icons" >navigate_next</FontIcon>}
                        />
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
)(Pagination1);