// Style your elements here
import styled from 'styled-components'

export const LinearGradient = styled.div`
  background-image: linear-gradient(
    ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  min-height: 150vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`
export const Heading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const Paragraph = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 22px;
`

export const UnOrderList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const PickColor = styled.p`
  color: #ffffff;
  text-align: center;
  font-family: 'Roboto';
  font-size: 22px;
`

export const PickColorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 325px;
`

export const PickContainerColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Color = styled(PickColor)`
  font-size: 20px;
`

export const Input = styled.input`
  height: 45px;
  width: 90px;
  padding: 0px;
  background: transparent;
  border: 0px;
`
export const Button = styled.button`
  height: 40px;
  width: 100px;
  margin-top: 17px;
  border-radius: 6px;
  border: 0px;
  background: #00c9b7;
  color: #1e293b;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`
