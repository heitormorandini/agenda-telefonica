export function getContactListRequest() {
  return {
    type: '@agenda/GET_CONTACT_LIST_REQUEST',
  }
}

export function getContactListSuccess(list) {
  return {
    type: '@agenda/GET_CONTACT_LIST_SUCCESS',
    list,
  }
}

export function setContactList(info, newContact) {
  return {
    type: '@agenda/SET_CONTACT_LIST',
    payload: info,
    newContact
  }
}

export function addContact(info) {
  return {
    type: '@agenda/ADD_CONTACT',
    info,
  }
}

export function updateContact(info) {
  return {
    type: '@agenda/UPDATE_CONTACT',
    info,
  }
}

export function deleteContact(id) {
  return {
    type: '@agenda/DELETE_CONTACT',
    id,
  }
}

export function getContactByIdRequest(id) {
  return {
    type: '@agenda/GET_CONTACT_BY_ID_REQUEST',
    id,
  }
}

export function getContactByIdSuccess(info) {
  return {
    type: '@agenda/GET_CONTACT_BY_ID_SUCCESS',
    info,
  }
}

export function apiCallExampleRequest(info) {
  return {
    type: '@agenda/API_CALL_EXAMPLE_REQUEST',
    payload: info,
  }
}

export function apiCallExampleSuccess() {
  return {
    type: '@agenda/API_CALL_EXAMPLE_SUCCESS',
  }
}

export function apiCallExampleFailure() {
  return {
    type: '@agenda/API_CALL_EXAMPLE_FAILURE',
  }
}
