const letters = require('./letters.json');
const letters_knife = require('./letters_knife.json');
const cangjie = require('./cangjie.json');

class PepperSpray {
  constructor(string) {
    this.phrase = string || '';
    this.result = [];

    this.parse();
    this.translate();
  }

  getType(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      return 'vowels';
    }

    return 'consonants';
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
    
    w.forEach((l) => {
      result.web.push({
        l,
        v: letters[l]
      });
    });

    // Get result for wide
    let syllable = false;
    let syllable_letter = null;
    let n = [];

    result.web.forEach((_l, i) => {
      let type_group = this.getType(_l.l);

      if (!syllable) {
        syllable = true;
        syllable_letter = (syllable_letter) ? syllable_letter : _l.l;

        n.push(_l.v);
      } else {
        if (!letters_knife[syllable_letter]['waits_for'][type_group].includes(_l.l)) {
          syllable_letter = _l.l;

          n.push(_l.v);
        } else {
          syllable_letter = _l.l;
        }
      }
    });

    console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['people'];
          break;

        case 'behavior':
          result.wide = cangjie['water'];
          break;

        case 'place':
          result.wide = cangjie['middle'];
          break;
      }
    }

    this.result.push(result);
  }

  b(word, w) {
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

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie[''];
          break;

        case 'behavior':
          result.wide = cangjie[''];
          break;

        case 'place':
          result.wide = cangjie[''];
          break;

        case 'time':
          result.wide = cangjie[''];
          break;
      }
    }

    this.result.push(result);
  }

  c(word, w) {
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

    this.result.push(result);
  }

  d(word, w) {
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

    this.result.push(result);
  }

  e(word, w) {
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

    this.result.push(result);
  }

  f(word, w) {
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

    this.result.push(result);
  }

  g(word, w) {
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

    this.result.push(result);
  }

  h(word, w) {
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

    this.result.push(result);
  }

  i(word, w) {
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

    this.result.push(result);
  }

  j(word, w) {
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

    this.result.push(result);
  }

  k(word, w) {
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

    this.result.push(result);
  }

  l(word, w) {
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

    this.result.push(result);
  }

  m(word, w) {
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

    this.result.push(result);
  }

  n(word, w) {
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

    this.result.push(result);
  }

  o(word, w) {
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

    this.result.push(result);
  }

  p(word, w) {
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

    this.result.push(result);
  }

  q(word, w) {
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

    this.result.push(result);
  }

  r(word, w) {
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

    this.result.push(result);
  }

  s(word, w) {
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

    this.result.push(result);
  }

  t(word, w) {
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

    this.result.push(result);
  }

  u(word, w) {
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

    this.result.push(result);
  }

  v(word, w) {
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

    this.result.push(result);
  }

  w(word, w) {
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

    this.result.push(result);
  }

  x(word, w) {
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

    this.result.push(result);
  }

  y(word, w) {
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

    this.result.push(result);
  }

  z(word, w) {
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

    this.result.push(result);
  }
}

module.exports.PepperSpray = PepperSpray;

