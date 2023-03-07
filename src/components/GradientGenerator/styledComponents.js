// Style your elements here
import styled from 'styled-components'

export const LinearGradient = styled.div`
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  background-size: cover;
`
export const Heading = styled.h1`
  color: #ffffff;
`
export const Paragraph = styled.p`
  color: #ffffff;
`
