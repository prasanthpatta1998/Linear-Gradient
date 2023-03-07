import {Component} from 'react'
import {
  LinearGradient,
  Heading,
  Paragraph,
  UnOrderList,
  PickColor,
  PickColorContainer,
  PickContainerColor,
  Color,
  Input,
  Button,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

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

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  changeBackground = () => {
    const {color1, color2} = this.state

    this.setState({color1, color2})
  }

  onChangeDirection = DirectionText => {
    const newDirection = gradientDirectionsList.find(
      each => each.displayText === DirectionText,
    )
    this.setState({gradient: newDirection.value})
  }

  render() {
    const {gradient, color1, color2} = this.state

    return (
      <LinearGradient
        direction={`to ${gradient}`}
        firstColor={color1}
        secondColor={color2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnOrderList>
          {gradientDirectionsList.map(each => {
            const {value} = each
            const textOpacity = gradient === value ? 1 : 0.5
            return (
              <GradientDirectionItem
                key={each.directionId}
                value={each.value}
                displayText={each.displayText}
                textOpacity={textOpacity}
                onChangeDirection={this.onChangeDirection}
              />
            )
          })}
        </UnOrderList>
        <PickColor>Pick the Colors</PickColor>
        <PickColorContainer>
          <PickContainerColor>
            <Color>{color1}</Color>
            <Input type="color" value={color1} onChange={this.onChangeColor1} />
          </PickContainerColor>
          <PickContainerColor>
            <Color>{color2}</Color>
            <Input type="color" value={color2} onChange={this.onChangeColor2} />
          </PickContainerColor>
        </PickColorContainer>
        <Button type="button" onClick={this.changeBackground}>
          Generate
        </Button>
      </LinearGradient>
    )
  }
}

export default GradientGenerator
