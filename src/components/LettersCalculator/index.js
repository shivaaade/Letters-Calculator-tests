// Write your code here.

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {userInput: 0}

  onchangeVal = event => {
    this.setState({userInput: event.target.value.length})
  }

  render() {
    const {userInput} = this.state
    return (
      <div>
        <div>
          <h1>"Calculate the Letters you enter</h1>
          <label for="name">Enter the phrase"</label>
          <input id="name" onChange={this.onchangeVal} />
          <p>No.of letters: {userInput}</p>
        </div>
        <div>
          <img
            alt=" letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
