import * as listAction from '../../../../constants/actions/list.js';

export function deleteItemToList(id) {
    return (dispatch) => {
        dispatch({type: listAction.DELETE_ITEM_TO_LIST, id:id });
    };
}

export function changeActiveItem(id) {
    return (dispatch) => {
        dispatch({type: listAction.CHANGE_ACTIVE_ITEM, id:id });
    };
}

export function editItem(author, name, id) {
    return (dispatch) => {
        dispatch({type: listAction.EDIT_ITEM, author:author, name:name, id:id });
    };
}