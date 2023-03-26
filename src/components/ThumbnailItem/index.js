import './index.css'

const ThumbnailItem = props => {
  const {eachlist, changeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachlist

  const onClickButton = () => {
    changeImage(id)
  }
  const textClass = isActive ? 'noOpacity' : 'opacity'
  return (
    <li className="list-item">
      <button type="button" className={`btn ${textClass}`}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
