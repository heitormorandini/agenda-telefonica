import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

const ButtonTeste = styled(RectButton)`
  bottom: 20px;
  width: 80%;
  background: #039be5;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 25px;
  position: absolute;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export default function BottomButton({ text, ...rest }) {
  return (
    <ButtonTeste {...rest}>
      <Text>{text}</Text>
    </ButtonTeste>
  );
}
