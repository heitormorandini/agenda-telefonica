import styled from 'styled-components';

export const Header = styled.View`
  align-self: center;
  align-items: center;
  margin-top: 50px;
`;

export const HeaderText = styled.Text`
  padding-top: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;

export const HeaderImage = styled.Image.attrs(props => ({
  source: props.source
}))`
  align-self: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background: #fff;
  margin-bottom: 10px;
`;

export const ListContainer = styled.View`
  margin: 30px 0 10px;
  align-self: center;
  width: 90%;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  padding: 0 0 120px;
`;

export const ContatoCard = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px 0;
  background: rgba(230, 230, 230, 0.1);
`;

export const ContatoText = styled.Text.attrs({
  numberOfLines: 1,
})`
  align-self: center;
  font-size: 24px;
  color: #ddd;
  font-weight: bold;
  padding-left: 15px;
`;
