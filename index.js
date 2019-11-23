const request = require('request');
const cheerio = require('cheerio');

request('https://www.skillshare.com', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);

    const heading = $('h1.jumbotron');
    // console.log(heading); // giant object
    console.log(heading.html());

    const ouput = $('.center-wrapper').find('h1').text();
    console.log(ouput);
  }
});