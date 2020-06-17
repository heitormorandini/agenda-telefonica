import styled from 'styled-components';
import React from 'react'

const View = styled.View`
  align-self: ${props => `${props.align}` || 'center'};
  justify-content: center;
  height: ${props => props.size ? `${props.size}px` : '70px'};
  width: ${props => props.size ? `${props.size}px` : '70px'};
  border-radius: ${props => props.size ? `${props.size / 2}px` : '35px'};
  background: #718792;
`;

const Image = styled.Image.attrs(props => ({
  source: props.source
}))`
  align-self: ${props => `${props.align}` || 'center'};
  height: ${props => props.size ? `${props.size}px` : '70px'};
  width: ${props => props.size ? `${props.size}px` : '70px'};
  border-radius: ${props => props.size ? `${props.size / 2}px` : '35px'};
`;

const Text = styled.Text`
  align-self: center;
  font-size: ${props => props.size ? `${props.size / 2}px` : '35px'};
  color: #000;
  font-weight: bold;
`;

export default function Avatar(props) {
  return (
    <View {...props}>
      {props.source
        ? <Image {...props} />
        : <Text {...props} >{props.name.charAt(0)}</Text>
      }
    </View>
  )
}

