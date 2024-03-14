import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {selectedId: ''}

  onChangeDropdown = event => {
    this.setState({selectedId: event.target.value})
  }

  render() {
    const {selectedId} = this.state
    console.log(selectedId)

    const item = countryAndCapitalsList.findIndex(
      eachItem => eachItem.capitalDisplayText === selectedId,
    )
    console.log(item)
    console.log(countryAndCapitalsList[item].country)
    
    

    return (
      <div className="container">
        <div className="capitals-container">
          <h1>Countries and Capitals</h1>
          <div>
            <select className="dropdown" onChange={this.onChangeDropdown}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.capitalDisplayText} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <span> is capital of which country?</span>
          </div>
          <p></p>
        </div>
      </div>
    )
  }
}

export default Capitals
