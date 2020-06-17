import styled from 'styled-components';
import { TextInputMask } from 'react-native-masked-text';
import { ScrollView, Platform } from 'react-native';

export const HeaderButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.1);
  left: 10px;
  top: 10px;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const RemoveButton = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.1);
  margin: 10px 10px 0 0;
  height: 36px;
  width: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const ProfileView = styled.View`
  align-self: center;
  align-items: center;
  padding: 30px 0;
  width: 90%;
`;

export const ProfileName = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  margin: 10px 0;
  /* background: #eee; */
  border-radius: 4px;
  padding: 0 15px;
  /* border: 1px solid #eee; */
  border-color: #eee;
  border-bottom-width: 1px;
  color: #fff;
`;

export const PhoneInput = styled(TextInputMask).attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  margin: 10px 0;
  /* background: #eee; */
  border-radius: 4px;
  padding: 0 15px;
  /* border: 1px solid #eee; */
  border-color: #eee;
  border-bottom-width: 1px;
  color: #fff;
`;

export const FormView = styled.View`
  padding-bottom: 60px;
`;
