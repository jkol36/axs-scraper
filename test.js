import { expect } from 'chai'
import { 
  searchAxs, 
  getEvent 
} from './helpers'
import { parseEvent } from './parser'



describe('axs scraper', () => {
  let events = []
  it('should search axs', done => {
    searchAxs('luke bryan')
    .then(res => {
      expect(res).to.be.ok
      console.log(res)
      done()
    })
    .catch(done)
  })
  it('should get event', done => {
    let eventUrl = '/events/336346/luke-bryan-tickets'
    getEvent(eventUrl)
    .then(res => {
      expect(res).to.be.ok
      console.log(res)
      done()
    })
  })
  it('should parse event', done => {
    let eventUrl = '/events/336346/luke-bryan-tickets'
    getEvent(eventUrl)
    .then(parseEvent)
    .then(res => {
      console.log(res)
      done()
    })
  })
})