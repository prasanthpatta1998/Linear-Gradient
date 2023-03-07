import {Component} from 'react'
import {LinearGradient, Heading, Paragraph} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradient: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  }

  render() {
    const {gradient, color1, color2} = this.state

    return (
      <LinearGradient
        direction={`to ${gradient}`}
        firstColor={color1}
        secondColor={color2}
      >
        <Heading>Generate a CSS gradient Color</Heading>
        <Paragraph>Choose Direction</Paragraph>
      </LinearGradient>
    )
  }
}

export default GradientGenerator
