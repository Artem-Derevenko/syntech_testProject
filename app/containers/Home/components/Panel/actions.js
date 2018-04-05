import * as listAction from '../../../../constants/actions/list.js';
import api from '../../../../api/index.js';

export function showList(show) {
    const listTest = ['Address verify', 'GroupAccts', 'Copy to Group', 'Copy to Data', 'Verify',
       'Add Related Claim', 'New Group', 'Return Account', 'Print Latter', 'Create Envelope', 'Edit', 'Delete'];
    return (dispatch) => {
        dispatch({type: listAction.SHOW_LIST, list: show  ? listTest : [] });
    };
}

export function addItemToList(data) {
    return (dispatch) => {
        dispatch({type: listAction.ADD_ITEM_TO_LIST, data:data });
    };
}

export function searchItem(str) {
    return (dispatch) => {
        dispatch({type: listAction.SEARCH_ITEM, text:str });
    };
}