const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const potusParse = require('./potusParse');
const dataHandler = require('./dataHandler')

rp(url)
  .then(function(html){
    //success!
    let loaded = $.load(html)
    let htmlResults = loaded('td > b > a', html);
    let resultCount = loaded('td > b > a', html).length;
    let wikiUrl = []
    let i = 0;

    for(i; i < resultCount; i++){
      wikiUrl.push(htmlResults[i].attribs.href);
    }
    return Promise.all(
      wikiUrl.map(item => potusParse('https://en.wikipedia.org' + item))
    )
    .then(res => {
      dataHandler(res)
    })
  })
  .catch(function(err){
    //handle error
    console.log(err)
  });
