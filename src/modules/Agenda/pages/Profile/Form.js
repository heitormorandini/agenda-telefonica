import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';

import { Input, PhoneInput } from './styles';

export default function Form({ info, setInfo }) {
  const addressRef = useRef();
  const telefoneRef = useRef();
  const emailRef = useRef();

  return (
    <View>
      <Input
        autoCorrect={false}
        autoCapitalize='words'
        placeholder="Nome"
        value={info.name}
        onChangeText={setInfo.setName}
        returnKeyType="send"
        onSubmitEditing={() => { }}
      />
      <PhoneInput
        type={'cel-phone'}
        placeholder='Telefone'
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={info.phoneNumber}
        onChangeText={setInfo.setPhoneNumber}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <Input
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType='email-address'
        placeholder="E-mail"
        value={info.email}
        onChangeText={setInfo.setEmail}
        returnKeyType="send"
        ref={emailRef}
      />
      <Input
        autoCorrect={false}
        autoCapitalize='words'
        placeholder="Endereço"
        value={info.address}
        onChangeText={setInfo.setAddress}
        returnKeyType="send"
        ref={addressRef}
      />
    </View>
  );
}
