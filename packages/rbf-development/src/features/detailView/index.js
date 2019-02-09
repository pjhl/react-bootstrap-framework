import React, { Fragment } from 'react'
import DetailView from './DetailView'

const record = {
  id: 1,
  link: 'https://www.youtube.com/watch?v=QUvVdTlA23w',
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
        { item.label('Id').text('id') }
        { item.label('Link').text('link') }
        { item.label('name').text('name') }
        { item.label('Category').text('category') }
        { item.label('Tags').text('tags') }
      </Fragment>
    }}
  </DetailView>
)