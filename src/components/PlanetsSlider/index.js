// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {dots: false, slidesToShow: 1, slidesToScroll: 1}

  return (
    <div className="planet-slider-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
