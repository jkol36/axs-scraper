import cheerio from 'cheerio'
import xpath from 'xpath'
export const parseEvent = event => {
  console.log('got event', event)
  return new Promise((resolve, reject) => {
    let $ = cheerio.load(event)
    let eventName = $('.c-venue__name .link--neutral').text()
    let address1 = $('.address1').text()
    let address2 = $('.address2').text()
    let phone = $('.phone').text()
    let eventDate = $('//*[@id="page-relative-block"]/section[2]/section[4]/div[1]/div/div[3]/div/div[2]/text()')
    let doorsOpen = $('//*[@id="page-relative-block"]/section[2]/section[4]/div[1]/div/div[3]/div/div[2]/div[1]/text()')
    let onSale = $('//*[@id="page-relative-block"]/section[2]/section[4]/div[1]/div/div[3]/div/div[2]/div[2]/text()')
    let tourTitle = $('//*[@id="page-relative-block"]/section[2]/section[4]/div[1]/div/div[1]/span').text()
    resolve({
      eventName,
      address1,
      address2,
      phone,
      eventDate,
      doorsOpen,
      onSale,
      tourTitle
    })
  })
}