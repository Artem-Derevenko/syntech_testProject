import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList, addItemToList, searchItem } from './actions.js';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import './Panel.scss';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabActive: 'tab1',
            searchValue: '',
            authorValue: '',
            bookValue: ''
        };
    }

    _AddItem = (id, author, name) => {
        const date = new Date();
        const data = {
            id: id,
            author: author,
            name: name,
            date: date.toUTCString()
        };
        this.props.onAddItem(data);
    }

    _onClearSearch = () => {
        this.props.onSearchItem('');
        this.setState({
            searchValue: ''
        });
    }

    _handleKeyPressSearch = (e) => {
        if ( e.keyCode === 13 ) {
                this.props.onSearchItem(this.state.searchValue);
                this.setState({
                    searchValue: ''
                });
        }
    }

    _handleKeyPress = (e) => {
        if ( e.keyCode === 13 ) {
            if ( this.state.authorValue && this.state.bookValue ) {
                const date = new Date();
                const author = this.state.authorValue;
                const name = this.state.bookValue;
                const maxId = this.props.list.reduce(function (max, item) {
                    return (item.id > max) ? (max = item.id) : max;
                }, 0);
                this._AddItem(maxId + 1, author, name, date.toUTCString());
                this.setState({
                    authorValue: '',
                    bookValue: ''
                });
            }
        }
    }

    handleChange = (value) => {
        this.setState({
            tabActive: value
        });
    }

    handleChangeInput = (event, value) => {
        switch(value) {
            case 'author':
                this.setState({
                    authorValue: event.target.value
                });
                break;

            case 'book':
                this.setState({
                    bookValue: event.target.value
                });
                break;

            case 'search':
                this.setState({
                    searchValue: event.target.value
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <Paper zDepth={2} className="panel">
                    <Tabs
                        value={this.state.tabActive}
                        onChange={this.handleChange}
                    >
                        <Tab label="Добавить книгу" value="tab1" onActive={ () => this._onClearSearch() }>
                            <div className="wrap-tabs">
                                <TextField
                                    floatingLabelText="Введите имя автора"
                                    fullWidth={true}
                                    value={this.state.authorValue}
                                    onKeyDown={ (e) => this._handleKeyPress(e)}
                                    onChange={ (event) => this.handleChangeInput(event, 'author')}
                                />
                                <TextField
                                    floatingLabelText="Введите название книги"
                                    fullWidth={true}
                                    value={this.state.bookValue}
                                    onKeyDown={ (e) => this._handleKeyPress(e)}
                                    onChange={ (event) => this.handleChangeInput(event, 'book')}
                                />
                            </div>
                        </Tab>
                        <Tab label="Найти книгу" value="tab2">
                            <div className="wrap-tabs">
                                <TextField
                                    floatingLabelText="Введите текст"
                                    fullWidth={true}
                                    value={this.state.searchValue}
                                    onKeyDown={ (e) => this._handleKeyPressSearch(e)}
                                    onChange={ (event) => this.handleChangeInput(event, 'search')}
                                />
                            </div>
                        </Tab>
                    </Tabs>
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
        onAddItem: (data) => {
            dispatch(addItemToList(data));
        },
        onSearchItem: (str) => {
            dispatch(searchItem(str));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panel);
