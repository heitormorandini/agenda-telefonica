import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import avatar from '~/assets/matthew.png';

import Avatar from '~/components/Avatar';

import { List, ContatoCard, ContatoText } from './styles';

export default function ContatoList({ navigation, info, setInfo }) {
  const { contacts } = info;
  const { setContacts } = setInfo;

  useEffect(() => {
    console.tron.log(info)
  }, [])

  function handleNavigation(item) {
    navigation.navigate('EditProfile', { item });
  }

  return (
    <List
      data={info.contacts}
      keyExtractor={(item) => `${item.nome + item.id}`}
      renderItem={({ item }) => (
        <ContatoCard onPress={() => handleNavigation(item)}>
          <Avatar source={avatar} size={50} />
          <ContatoText>{item.nome}</ContatoText>
        </ContatoCard>
      )}
      contentContainerStyle={{ paddingBottom: 50 }}
    />
  )
}
