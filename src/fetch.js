const fetch = require('node-fetch');

const res = Promise.resolve(fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=base64&token=b7e8523097ccec88b2cf917f395a8102d29061516d99541f826ae114caa07070')
  .then(r => r.json())
  .then(r => {
    const res = r.results.map(item => Buffer.from(item.question, 'base64').toString());
    return res;
  }))//?

console.log(res);