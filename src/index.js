const letters = require('./letters.json');
const cangjie = require('./cangjie.json');

class PepperSpray {
  constructor(string) {
    this.phrase = string || '';
    this.result = [];

    this.parse();
    this.translate();
  }

  parse() {
    this.phrase = this.phrase.toLowerCase().split(' ');
  }

  translate() {
    this.phrase.forEach((word) => {
      let w = Object.values(word);
      let f = w[0];
      
      this[f].call(this, word, w);
    });
  }

  a(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['corpse'],
      web: []
    };
    
    w.forEach((w) => {
      result.web.push({
        l: w,
        v: letters[w]
      });
    });

    // Get result for wide
    let n = ['value'];

    result.web.forEach((_l, i) => {
      if (_l.v !== 'value' && _l.v !== 'place' ) {
        if (_l.v !== n[n.length - 1]) {
          n.push(_l.v);
        }
      }
    });

    console.log(n);

    this.result.push(result);
  }

  b(word, w) {
    this.result.push(result);
  }

  c(word, w) {
    this.result.push(result);
  }

  d(word, w) {
    this.result.push(result);
  }

  e(word, w) {
    this.result.push(result);
  }

  f(word, w) {
    this.result.push(result);
  }

  g(word, w) {
    this.result.push(result);
  }

  h(word, w) {
    this.result.push(result);
  }

  i(word, w) {
    this.result.push(result);
  }

  j(word, w) {
    this.result.push(result);
  }

  k(word, w) {
    this.result.push(result);
  }

  l(word, w) {
    this.result.push(result);
  }

  m(word, w) {
    this.result.push(result);
  }

  n(word, w) {
    this.result.push(result);
  }

  o(word, w) {
    this.result.push(result);
  }

  p(word, w) {
    this.result.push(result);
  }

  q(word, w) {
    this.result.push(result);
  }

  r(word, w) {
    this.result.push(result);
  }

  s(word, w) {
    this.result.push(result);
  }

  t(word, w) {
    this.result.push(result);
  }

  u(word, w) {
    this.result.push(result);
  }

  v(word, w) {
    this.result.push(result);
  }

  w(word, w) {
    this.result.push(result);
  }

  x(word, w) {
    this.result.push(result);
  }

  y(word, w) {
    this.result.push(result);
  }

  z(word, w) {
    this.result.push(result);
  }
}

module.exports.PepperSpray = PepperSpray;

