import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Background from '~/components/Background';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { BackButton, ProfileView, ProfileName } from "./styles";
import Avatar from '~/components/Avatar';
import BottomButton from '~/components/BottomButton';
import Form from './Form';

import avatar from '~/assets/matthew.png';


export default function Profile({ navigation }) {
  const [id, setId] = useState(null);
  const [name, setName] = useState(navigation.state.params.item ? navigation.state.params.item.nome : '');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  function handleBackButton() {
    navigation.navigate('HomeAgenda');
  }

  return (
    <Background>
      <BackButton onPress={handleBackButton}>
        <Icon name='arrow-back' size={25} color='#fff' />
      </BackButton>
      <ScrollView>
        <ProfileView>
          <Avatar source={avatar} size={150} />
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

      <BottomButton text='Inserir' onPress={() => console.tron.log('teste')} />
    </Background>
  )
}
