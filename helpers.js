import agent from 'superagent-bluebird-promise'
import { headers } from './config'


export const searchAxs = query => {
  let url = `https://www.axs.com/search/autocomplete?term=${query.split(' ').join('+')}&rows=100&country=US&latitude=40.3487&longitude=-74.6590`

  return agent
          .get(url)
          .set(headers)
          .then(res => JSON.parse(res.text))
          .catch(err => err)
}

export const getEvent = eventUrl => {
  return agent
          .get(`https://www.axs.com${eventUrl}`)
          .set(headers)
          .then(res => res.body)
          .catch(err => err)
}