import styled from 'styled-components';

export default styled.Image.attrs(props => ({
  source: props.source
}))`
  align-self: ${props => `${props.align}` || 'center'};
  height: ${props => props.size ? `${props.size}px` : '70px'};
  width: ${props => props.size ? `${props.size}px` : '70px'};
  border-radius: ${props => props.size ? `${props.size / 2}px` : '35px'};
  background: #fff;
`;
