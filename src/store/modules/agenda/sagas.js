import { Alert } from 'react-native';
import { takeLatest, call, put, all } from "redux-saga/effects";
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import {
  apiCallExampleSuccess,
  apiCallExampleFailure,
  setContactList,
  getContactByIdSuccess,
  getContactListSuccess,
} from './actions';

export function* getContactList() {
  const contatoList = yield call(AsyncStorage.getItem, 'contatoList');

  yield put(getContactListSuccess(contatoList && contatoList.length ? JSON.parse(contatoList).sort((a, b) => a.name.localeCompare(b.name)) : []));
}

export function* setContactListFunction({ payload, newContact }) {
  console.tron.log('payload: ', payload)
  yield call(AsyncStorage.setItem, 'contatoList', JSON.stringify(payload));

  if (newContact) {
    Alert.alert('Inserido com sucesso!', 'Contato inserido com sucesso!');
  }

  yield put(getContactListSuccess(payload && payload.length ? payload.sort((a, b) => a.name.localeCompare(b.name)) : []));
}

export function* addContact({ info }) {
  const contatoList = yield call(AsyncStorage.getItem, 'contatoList');

  let parsedContatoList = [];
  let id;
  if (contatoList && contatoList.length) {
    parsedContatoList = JSON.parse(contatoList);

    id = parsedContatoList && parsedContatoList.length ? parsedContatoList.sort((a, b) => b.id - a.id)[0].id + 1 : 1;
  } else id = 1;

  yield put(setContactList([...parsedContatoList, { id, ...info }], true));
}

export function* updateContact({ info }) {
  const contatoList = yield call(AsyncStorage.getItem, 'contatoList');
  const parsedContatoList = JSON.parse(contatoList)

  console.tron.log('info: ', info)

  const index = parsedContatoList && parsedContatoList.length ? parsedContatoList.findIndex(x => x.id === info.id) : -1;

  console.tron.log('index: ', index)
  if (index !== -1)
    parsedContatoList.splice(index, 1, info);

  console.tron.log('parsedContatoList: ', parsedContatoList)

  yield put(setContactList(parsedContatoList));
}

export function* deleteContact({ id }) {
  const contatoList = yield call(AsyncStorage.getItem, 'contatoList');
  const parsedContatoList = JSON.parse(contatoList)
  console.tron.log('parsedContatoList: ', parsedContatoList)
  console.tron.log('id: ', id)

  const index = parsedContatoList && parsedContatoList.length ? parsedContatoList.findIndex(x => x.id === id) : -1;
  console.tron.log('index: ', index)

  if (index === -1) {
    Alert.alert('Contato não encontrado!');
    return;
  }

  parsedContatoList.splice(index, 1);

  yield put(setContactList(parsedContatoList));
}

export function* getContactById({ id }) {
  if (!id) {
    yield put(getContactByIdSuccess({}));
    return;
  }

  const contatoList = yield call(AsyncStorage.getItem, 'contatoList');
  const parsedContatoList = JSON.parse(contatoList)

  const info = parsedContatoList && parsedContatoList.length ? parsedContatoList.find(x => x.id === id) : {};

  yield put(getContactByIdSuccess(info));
}

export function* apiCall({ info }) {
  try {
    const response = yield call(api.post, 'example', {
      info
    });

    const { returnedInfo } = response.data;

    if (returnedInfo.errCode) {
      Alert.alert('Dados inválidos!', 'Os dados enviados para o serviço são inválidos! Verifique e tente novamente!');
      return;
    }

    yield put(apiCallExampleSuccess(returnedInfo));
  } catch (error) {
    Alert.alert('Erro na chamada do serviço', 'Ocorreu um erro ao chamar o serviço buscado');

    yield put(apiCallExampleFailure())
  }
}

export default all([
  takeLatest('@agenda/GET_CONTACT_LIST_REQUEST', getContactList),
  takeLatest('@agenda/SET_CONTACT_LIST', setContactListFunction),
  takeLatest('@agenda/ADD_CONTACT', addContact),
  takeLatest('@agenda/DELETE_CONTACT', deleteContact),
  takeLatest('@agenda/UPDATE_CONTACT', updateContact),
  takeLatest('@agenda/GET_CONTACT_BY_ID_REQUEST', getContactById),
  takeLatest('@agenda/API_CALL_EXAMPLE_REQUEST', apiCall),
]);
