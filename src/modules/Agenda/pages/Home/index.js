import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import avatar from '~/assets/matthew.png';

import Background from '~/components/Background';
import Avatar from '~/components/Avatar';
import BottomButton from '~/components/BottomButton';

import { Header, HeaderText } from './styles';
import ContatoList from './ContatoList';
import { getContactListRequest } from "~/store/modules/agenda/actions";

export default function Home({ navigation }) {

  const dispatch = useDispatch();

  const teste = useSelector(state => state.agenda);
  useEffect(() => {
    dispatch(getContactListRequest());
  }, []);

  const handleAddButtom = () => {
    navigation.navigate('EditProfile', {});
  }

  return (
    <Background>
      <Header>
        <Avatar source={avatar} />
        <HeaderText>Lista Telefônica</HeaderText>
      </Header>

      <ContatoList navigation={navigation} />
      <BottomButton text="Novo Contato" onPress={handleAddButtom} />
    </Background>
  );
}
