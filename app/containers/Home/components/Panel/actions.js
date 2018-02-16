import * as listAction from '../../../../constants/actions/list.js';

export function showList(show) {
    const listTest = ['Address verify', 'GroupAccts', 'Copy to Group', 'Copy to Data', 'Verify',
       'Add Related Claim', 'New Group', 'Return Account', 'Print Latter', 'Create Envelope', 'Edit', 'Delete'];
    return (dispatch) => {
        dispatch({type: listAction.SHOW_LIST, list: show  ? listTest : [] });
    };
}

export function addItemToList(id, name, date) {
    const data = { id: id, name: name, date: date};
    return (dispatch) => {
        dispatch({type: listAction.ADD_ITEM_TO_LIST, data:data });
    };
}
