// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  background-color: #ffffff;
  height: 40px;
  width: 145px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #014f7b;
  font-size: 15px;
  opacity: ${props => props.text};
`
export const DirectionButton = styled.button`
  border: 0px;
  background: transparent;
  width: 153px;
  cursor: pointer;
  outline: none;
`
