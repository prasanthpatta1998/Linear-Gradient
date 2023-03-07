// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {textOpacity, displayText, onChangeDirection} = props

  const onChangeValue = () => {
    onChangeDirection(displayText)
  }

  return (
    <DirectionButton type="button" onClick={onChangeValue}>
      <ListItem text={textOpacity}>{displayText}</ListItem>
    </DirectionButton>
  )
}
export default GradientDirectionItem
