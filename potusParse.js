const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function(url) {
  return rp(url)
    .then(function(html) {
      let loaded = $.load(html)
      return {
        name: loaded('.firstHeading', html).text(),
        birthday: loaded('td > span > .bday', html).text(),
      };
    })
    .catch(function(err) {
      //handle error
    });
};

module.exports = potusParse;