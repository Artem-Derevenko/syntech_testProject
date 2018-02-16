import * as listAction from '../../../../constants/actions/list.js';

export function changePagination(page) {
    return (dispatch) => {
        dispatch({ type: listAction.CHANGE_PAGINATION, page:page });
    };
}

export function changePaginationPrev() {
    return (dispatch) => {
        dispatch({ type: listAction.CHANGE_PAGINATION_PREV });
    };
}

export function changePaginationNext() {
    return (dispatch) => {
        dispatch({ type: listAction.CHANGE_PAGINATION_NEXT });
    };
}

