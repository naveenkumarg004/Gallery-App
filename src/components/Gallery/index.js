import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.
class Gallery extends Component {
  state = {selectedId: 0}

  changeImage = id => {
    this.setState({selectedId: id})
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {selectedId} = this.state
    const filteredList = imagesList.filter(each => each.id === selectedId)
    console.log(filteredList)

    return (
      <div className="bg">
        <div className="content-div">
          {filteredList.map(each => (
            <img
              className="main-image"
              src={each.imageUrl}
              alt={each.imageAltText}
              key={each.id}
            />
          ))}
          <div className="bottom">
            <h1 className="head">Nature Photography</h1>
            <p className="para">Nature Photography by Rahul</p>
            <ul className="thumds-cont">
              {imagesList.map(eachlist => (
                <ThumbnailItem
                  eachlist={eachlist}
                  key={eachlist.id}
                  changeImage={this.changeImage}
                  isActive={selectedId === eachlist.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

/*
const Gallery = () => (
  <div className="bg">
    <img
      className="image"
      src={imagesList[0].imageUrl}
      alt={imagesList[0].thumbnailUrl}
    />
    <h1 className="head">Nature Photography</h1>
    <p className="para">Nature Photography by Rahul</p>
    <li className="thumbnail-cont">
      {imagesList.map(eachList => (
        <ThumbnailItem eachList={eachList} key={eachList.id} />
      ))}
    </li>
  </div>
)
*/

export default Gallery
