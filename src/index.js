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
    let syllable_count = 0;
    let ignore = false;
    let n = [];

    result.web.forEach((_l, i) => {
      let type_group = this.getType(_l.l);

      if (!syllable) {
        syllable = true;
        syllable_letter = _l.l;
        syllable_count = 1;

        n.push(_l.v);
      } else {
        syllable_count++;

        if (!letters_knife[syllable_letter]['waits_for'][type_group].includes(_l.l)) {
          syllable_letter = _l.l;
          
          n.push(_l.v);
        } else {
          let le = (!result.web[i + 1]) ? '' : result.web[i + 1].l;
          let lk = letters_knife[_l.l]['waits_for']['_after'][le];

          if (syllable_count = 2 && !lk) {
            syllable = false;
          } else if (lk && result.word.slice(i + 1, result.word.length) === (le + lk)) {
            syllable_count = 3;
          }

          syllable_letter = _l.l;
        }
      }
    });

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
      wide: cangjie['mountain'],
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
    let syllable_count = 0;
    let ignore = false;
    let n = [];

    result.web.forEach((_l, i) => {
      let type_group = this.getType(_l.l);

      if (!syllable) {
        syllable = true;
        syllable_letter = _l.l;
        syllable_count = 1;

        n.push(_l.v);
      } else {
        syllable_count++;

        if (!letters_knife[syllable_letter]['waits_for'][type_group].includes(_l.l)) {
          syllable_letter = _l.l;
          
          n.push(_l.v);
        } else {
          let le = (!result.web[i + 1]) ? '' : result.web[i + 1].l;
          let lk = letters_knife[_l.l]['waits_for']['_after'][le];

          if (syllable_count = 2 && !lk) {
            syllable = false;
          } else if (lk && result.word.slice(i + 1, result.word.length) === (le + lk)) {
            syllable_count = 3;
          }

          syllable_letter = _l.l;
        }
      }
    });


    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['disaster'];
          break;

        case 'behavior':
          result.wide = cangjie['earth'];
          break;

        case 'place':
          result.wide = cangjie['corpse'];
          break;
      }
    }

    this.result.push(result);
  }

  c(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['bow'],
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
    let syllable_count = 0;
    let ignore = false;
    let n = [];

    result.web.forEach((_l, i) => {
      let type_group = this.getType(_l.l);

      if (!syllable) {
        syllable = true;
        syllable_letter = _l.l;
        syllable_count = 1;

        n.push(_l.v);
      } else {
        syllable_count++;

        if (!letters_knife[syllable_letter]['waits_for'][type_group].includes(_l.l)) {
          syllable_letter = _l.l;
          
          n.push(_l.v);
        } else {
          let le = (!result.web[i + 1]) ? '' : result.web[i + 1].l;
          let lk = letters_knife[_l.l]['waits_for']['_after'][le];

          if (syllable_count = 2 && !lk) {
            syllable = false;
          } else if (lk && result.word.slice(i + 1, result.word.length) === (le + lk)) {
            syllable_count = 3;
          }

          syllable_letter = _l.l;
        }
      }
    });

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['water'];
          break;

        case 'behavior':
          result.wide = cangjie['day'];
          break;

        case 'place':
          result.wide = cangjie['corpse'];
          break;
      }
    }

    this.result.push(result);
  }

  d(word, w) {
    
  }

  e(word, w) {
    
  }

  f(word, w) {
    
  }

  g(word, w) {
    
  }

  h(word, w) {
    
  }

  i(word, w) {
    
  }

  j(word, w) {
    
  }

  k(word, w) {
    
  }

  l(word, w) {
    
  }

  m(word, w) {
    
  }

  n(word, w) {
    
  }

  o(word, w) {
    
  }

  p(word, w) {
    
  }

  q(word, w) {
    
  }

  r(word, w) {
    
  }

  s(word, w) {
    
  }

  t(word, w) {
    
  }

  u(word, w) {
    
  }

  v(word, w) {
    
  }

  w(word, w) {
    
  }

  x(word, w) {
    
  }

  y(word, w) {
    
  }

  z(word, w) {
    
  }
}

module.exports.PepperSpray = PepperSpray;

