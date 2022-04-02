// Write your code here
import './index.css'

const DestinationItems = props => {
  const {destinationsDetails} = props
  const {name, imgUrl} = destinationsDetails

  return (
    <li className="ListContainer">
      <img className="image" src={imgUrl} alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItems
