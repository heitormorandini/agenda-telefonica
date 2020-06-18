import produce from 'immer';

const INITIAL_STATE = {
  contactInfo: {},
  contactList: [],
  loading: false,
};

export default function agenda(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@agenda/GET_CONTACT_LIST_SUCCESS': {
        draft.contactList = action.list;
        break;
      }
      case '@agenda/GET_CONTACT_BY_ID_SUCCESS': {
        console.tron.log('action: ', action);
        draft.contactInfo = action.info || INITIAL_STATE.contactInfo;
        break;
      }
      case '@agenda/API_CALL_EXAMPLE_REQUEST': {
        draft.info = action.payload;
        draft.loading = true;
        break;
      }
      case '@agenda/API_CALL_EXAMPLE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@agenda/API_CALL_EXAMPLE_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  })
}
