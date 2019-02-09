import React, { Fragment } from 'react'
import DetailView from './DetailView'

const record = {
  id: 1,
  link: 'https://www.youtube.com/watch?v=QUvVdTlA23w',
  public: true,
  name: 'Marilyn Manson - Sweet Dreams (Are Made Of This) (Alt. Version)',
  description: `Best of Marilyn Manson: https://goo.gl/5Z3C5t
    Subscribe here: https://goo.gl/iK9UwZ
    Music video by Marilyn Manson performing Sweet Dreams (Are Made Of This). (C) 1998 Interscope Record`,
  category: 'Music',
  tags: [
    '#MarilynManson',
    '#SweetDreams',
    '#Vevo',
    '#Rock',
    '#OfficialMusicVideo'
  ],
  statistics: {
    comments: 54251,
    views: 100745950,
    likes: 844526,
    dislikes: 53124
  },
  channel: {
    id: 1,
    link: 'https://www.youtube.com/channel/UCbirjI1K3MGu0-Y1gTBNR5w',
    name: 'Marilyn Manson',
    subscribes: 2062135
  }
}

export default () => (
  <DetailView record={record}>
    {(item) => {
      return <Fragment>
        { item().text('id') }
        { item().text('link') }
        { item().boolean('public') }
        { item().text('name') }
        { item().label('Youtube category').text('category') }
        { item().label('Tags').text('tags') }
        <h3 className='text-center'>Statistics</h3>
        { item().label('Comments').text('statistics.comments') }
        { item().label('Views').text('statistics.views') }
        { item().label('Likes').text('statistics.likes') }
        { item().label('Dislikes').text('statistics.dislikes') }
        <h3 className='text-center'>Channel</h3>
        { item().text('channel.id') }
        { item().text('channel.link') }
        { item().text('channel.name') }
        { item().text('channel.subscribes') }
      </Fragment>
    }}
  </DetailView>
)
