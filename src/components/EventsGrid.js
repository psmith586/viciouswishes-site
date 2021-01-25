import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const EventsGrid = ({ gridItems }) => (
  <div>
    {gridItems.map((item) => (
      <div key={item.date}>
        <section>
          <div>
            {item.date}
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.venue}</p>
          <p>{item.tickets}</p>
        </section>
      </div> 
    ))}
  </div>
)

EventsGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      venue: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      tickets: PropTypes.string,
      date: PropTypes.string
    })
  ),
}

export default EventsGrid