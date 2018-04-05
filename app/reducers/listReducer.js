import * as listActions from '../constants/actions/list.js';

const initialState = {
    list: [
        { id: 1, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2011 12:45:44 GMT'},
        { id: 2, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2017 12:45:44 GMT'},
        { id: 3, author: 'Джоан Роулинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2016 12:45:44 GMT'},
        { id: 4, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2017 12:45:44 GMT'},
        { id: 11, author: 'Стивен Кинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2010 12:45:44 GMT'},
        { id: 6, author: 'Джоан Роулинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2017 12:45:44 GMT'},
        { id: 7, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2017 12:45:44 GMT'},
        { id: 8, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2017 12:45:44 GMT'},
        { id: 19, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2010 12:45:44 GMT'},
        { id: 12, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2014 12:45:44 GMT'},
        { id: 13, author: 'Стивен Кинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2014 12:45:44 GMT'},
        { id: 14, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2015 12:45:44 GMT'},
        { id: 15, author: 'Джоан Роулинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2011 12:45:44 GMT'},
        { id: 16, author: 'Стивен Кинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2016 12:45:44 GMT'},
        { id: 17, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2015 12:45:44 GMT'},
        { id: 18, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2013 12:45:44 GMT'},
        { id: 21, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2011 12:45:44 GMT'},
        { id: 22, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2017 12:45:44 GMT'},
        { id: 23, author: 'Джоан Роулинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2016 12:45:44 GMT'},
        { id: 24, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2017 12:45:44 GMT'},
        { id: 25, author: 'Стивен Кинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2010 12:45:44 GMT'},
        { id: 26, author: 'Джоан Роулинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2017 12:45:44 GMT'},
        { id: 27, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2017 12:45:44 GMT'},
        { id: 28, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2017 12:45:44 GMT'},
        { id: 29, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2010 12:45:44 GMT'},
        { id: 30, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2014 12:45:44 GMT'},
        { id: 31, author: 'Стивен Кинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2014 12:45:44 GMT'},
        { id: 34, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2015 12:45:44 GMT'},
        { id: 35, author: 'Джоан Роулинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2011 12:45:44 GMT'},
        { id: 36, author: 'Стивен Кинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2016 12:45:44 GMT'},
        { id: 37, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2015 12:45:44 GMT'},
        { id: 38, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2013 12:45:44 GMT'},
        { id: 39, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2010 12:45:44 GMT'},
        { id: 42, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2014 12:45:44 GMT'},
        { id: 43, author: 'Стивен Кинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2014 12:45:44 GMT'},
        { id: 44, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2015 12:45:44 GMT'},
        { id: 45, author: 'Джоан Роулинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2011 12:45:44 GMT'},
        { id: 46, author: 'Стивен Кинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2016 12:45:44 GMT'},
        { id: 47, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2015 12:45:44 GMT'},
        { id: 48, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2013 12:45:44 GMT'},
        { id: 51, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2011 12:45:44 GMT'},
        { id: 52, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2017 12:45:44 GMT'},
        { id: 53, author: 'Джоан Роулинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2016 12:45:44 GMT'},
        { id: 54, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2017 12:45:44 GMT'},
        { id: 55, author: 'Стивен Кинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2010 12:45:44 GMT'},
        { id: 56, author: 'Джоан Роулинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2017 12:45:44 GMT'},
        { id: 57, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2017 12:45:44 GMT'},
        { id: 58, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2017 12:45:44 GMT'},
        { id: 59, author: 'Джоан Роулинг', name: 'Автостопом по галактике', date: 'Wed, 14 Feb 2010 12:45:44 GMT'},
        { id: 60, author: 'Стивен Кинг', name: 'Алхимик', date: 'Wed, 20 Feb 2014 12:45:44 GMT'},
        { id: 61, author: 'Стивен Кинг', name: 'Ангус, ремни и конкретные обжимашки', date: 'Wed, 15 Feb 2014 12:45:44 GMT'},
        { id: 64, author: 'Джоан Роулинг', name: 'Библия ядовитого леса', date: 'Wed, 10 Feb 2015 12:45:44 GMT'},
        { id: 65, author: 'Джоан Роулинг', name: 'Вдали от обезумевшей толпы', date: 'Wed, 24 Feb 2011 12:45:44 GMT'},
        { id: 66, author: 'Стивен Кинг', name: 'Властелин колец', date: 'Wed, 21 Feb 2016 12:45:44 GMT'},
        { id: 67, author: 'Джоан Роулинг', name: 'Возвращение в Брайдсхед', date: 'Wed, 27 Feb 2015 12:45:44 GMT'},
        { id: 68, author: 'Стивен Кинг', name: 'Гроздья гнева', date: 'Wed, 15 Feb 2013 12:45:44 GMT'}
    ],
    itemListActive: '',
    page: 1,
    search: ''
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
                if (item.id === action.id) {
                    item.name = action.name;
                    item.author = action.author
                }
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

        case listActions.SEARCH_ITEM:
            return {
                ...state,
                search: action.text
        };

        default:
            return state;
    }
};

export default listReducer;
