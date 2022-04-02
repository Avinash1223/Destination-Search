// Write your code here
import {Component} from 'react'
import DestinationItems from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const SearchResultInput = destinationsList.filter(everyDestination =>
      everyDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="destinationContainer">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {SearchResultInput.map(eachLocation => (
              <DestinationItems
                key={eachLocation.id}
                destinationsDetails={eachLocation}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
