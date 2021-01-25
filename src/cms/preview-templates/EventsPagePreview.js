import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../pages/events'

const EventsPagePreview = ({ entry, getAsset }) => {
  const entryEvents = entry.getIn(['data', 'shows'])
  const events = entryEvents ? entryEvents.toJS() : []

  return(
    <EventsPageTemplate
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['date', 'image']))}
      heading={entry.getIn(['data', 'heading'])}
      shows={{ events }}
    />
  )
}

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default EventsPagePreview