import React from 'react';

import Avatar from '~/components/Avatar';

import { List, ContatoCard, ContatoText } from './styles';

import { useSelector } from 'react-redux';

export default function ContatoList({ navigation, info }) {
  const contacts = useSelector(state => state.agenda.contactList);

  function handleNavigation(item) {
    navigation.navigate('EditProfile', { item });
  }

  return (
    <List
      data={contacts || []}
      keyExtractor={(item) => `${item.name + item.id}`}
      renderItem={({ item }) => (
        <ContatoCard onPress={() => handleNavigation(item)}>
          <Avatar source={null} size={50} name={item.name} />
          <ContatoText>{item.name}</ContatoText>
        </ContatoCard>
      )}
      contentContainerStyle={{ paddingBottom: 50 }}
    />
  )
}
