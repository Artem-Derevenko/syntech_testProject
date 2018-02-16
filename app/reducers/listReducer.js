import * as listActions from '../constants/actions/list.js';

const initialState = {
    list: [
        { id: 1, name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2011 12:45:44 GMT'},
        { id: 2, name: 'Алхимик', date: 'Wed, 20 Feb 2017 12:45:44 GMT'},
        { id: 3, name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2016 12:45:44 GMT'},
        { id: 4, name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2017 12:45:44 GMT'},
        { id: 11, name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2010 12:45:44 GMT'},
        { id: 6, name: 'Властелин колец', date: 'Wed, 21 Feb 2017 12:45:44 GMT'},
        { id: 7, name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2017 12:45:44 GMT'},
        { id: 8, name: 'Гроздья гнева', date: 'Wed, 15 Feb 2017 12:45:44 GMT'},
        { id: 19, name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2010 12:45:44 GMT'},
        { id: 12, name: 'Алхимик', date: 'Wed, 20 Feb 2014 12:45:44 GMT'},
        { id: 13, name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2014 12:45:44 GMT'},
        { id: 14, name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2015 12:45:44 GMT'},
        { id: 15, name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2011 12:45:44 GMT'},
        { id: 16, name: 'Властелин колец', date: 'Wed, 21 Feb 2016 12:45:44 GMT'},
        { id: 17, name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2015 12:45:44 GMT'},
        { id: 18, name: 'Гроздья гнева', date: 'Wed, 15 Feb 2013 12:45:44 GMT'}
    ],
    itemListActive: '',
    page: 1
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case listActions.SHOW_LIST:
            return {
                ...state,
                list: action.list
            };

        case listActions.ADD_ITEM_TO_LIST:
            const newlist = state.list.concat(action.data);

            console.log(newlist)
            return {
                ...state,
                list: newlist
            };

        case listActions.DELETE_ITEM_TO_LIST:
            const listDelete = state.list.filter( (item) => {
                return item.id !== action.id;
            });

            return {
                ...state,
                list: listDelete
            };

        case listActions.CHANGE_ACTIVE_ITEM:
            return {
                ...state,
                itemListActive: action.id
            };

        case listActions.EDIT_ITEM:
            const listEdit = state.list.map( (item) => {
                (item.id === action.id) ? item.name = action.name : item.name;
                return item;
            });
            return {
                ...state,
                list: listEdit
            };

        case listActions.CHANGE_PAGINATION:
            return {
                ...state,
                page: action.page
        };

        case listActions.CHANGE_PAGINATION_NEXT:
            const nextPage = state.page + 1;
            return {
                ...state,
                page: nextPage
        };

        case listActions.CHANGE_PAGINATION_PREV:
            const prevPage = state.page - 1;
            return {
                ...state,
                page: prevPage
        };

        default:
            return state;
    }
};

export default listReducer;
