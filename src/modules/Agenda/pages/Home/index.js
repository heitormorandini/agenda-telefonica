import React, { useEffect, useState, useMemo } from 'react';
import { Text } from 'react-native';

import avatar from '~/assets/matthew.png';

import Background from '~/components/Background';
import Avatar from '~/components/Avatar';
import BottomButton from '~/components/BottomButton';

import { Header, HeaderText } from './styles';
import ContatoList from './ContatoList';

export default function Home({ navigation }) {
  const [contacts, setContacts] = useState([
    {
      "id": 4,
      "nome": "Aiesha Sears"
    },
    {
      "id": 3,
      "nome": "Ajay Chapman"
    },
    {
      "id": 1,
      "nome": "Arman Connolly"
    },
    {
      "id": 2,
      "nome": "Aryaan Mckinney"
    },
  ]);


  const handleAddButtom = () => {
    navigation.navigate('EditProfile', {});
  }

  return (
    <Background>
      <Header>
        <Avatar source={avatar} />
        <HeaderText>Lista Telefônica</HeaderText>
      </Header>

      <ContatoList info={{ contacts }} setInfo={{ setContacts }} navigation={navigation} />
      <BottomButton text="Adicionar Novo" onPress={handleAddButtom} />
    </Background>
  );
}
