import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { useDispatch } from "react-redux";

import { addContact, deleteContact, updateContact, getContactByIdRequest } from "~/store/modules/agenda/actions";

import Background from '~/components/Background';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { BackButton, ProfileView, ProfileName, RemoveButton, HeaderButtons } from "./styles";
import Avatar from '~/components/Avatar';
import BottomButton from '~/components/BottomButton';
import Form from './Form';

import avatar from '~/assets/matthew.png';

export default function Profile({ navigation }) {
  const dispatch = useDispatch();

  const item = navigation.getParam('item');

  const [id, setId] = useState(item ? item.id : null);
  const [name, setName] = useState(item ? item.name : '');
  const [phoneNumber, setPhoneNumber] = useState(item ? item.phoneNumber : '');
  const [email, setEmail] = useState(item ? item.email : '');
  const [address, setAddress] = useState(item ? item.address : '');

  function handleBackButton() {
    dispatch(getContactByIdRequest());
    navigation.navigate('HomeAgenda');
  }

  function handleAddButton() {
    const info = {
      name,
      phoneNumber,
      email,
      address,
    };

    const action = id ? updateContact({ id, ...info }) : addContact(info);

    dispatch(action);

    navigation.navigate('HomeAgenda');
  }

  function confirmDelete() {
    dispatch(deleteContact(id));

    navigation.navigate('HomeAgenda');
  }

  function handleDeleteButton() {
    Alert.alert(
      'Confirmar exclusão',
      'Você deseja mesmo excluir o contato?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'default',
          onPress: confirmDelete,
        }
      ]
    )
  }

  return (
    <Background>
      <HeaderButtons>
        <BackButton onPress={handleBackButton}>
          <Icon name='arrow-back' size={25} color='#fff' />
        </BackButton>
        {
          item && item.id
            ? (
              <RemoveButton onPress={handleDeleteButton}>
                <Icon name='delete' size={25} color='#d50000' />
              </RemoveButton>
            )
            : (<></>)
        }
      </HeaderButtons>

      <ScrollView>
        <ProfileView>
          <Avatar source={avatar} size={150} name={name || 'Novo Contato'} />
          <ProfileName>{name || 'Novo Contato'}</ProfileName>
        </ProfileView>

        <Form
          info={{
            id,
            name,
            phoneNumber,
            email,
            address,
          }}
          setInfo={{
            setId,
            setName,
            setPhoneNumber,
            setEmail,
            setAddress,
          }}
        />
      </ScrollView>

      <BottomButton text={id ? 'Alterar' : 'Inserir'} onPress={handleAddButton} />
    </Background>
  )
}
