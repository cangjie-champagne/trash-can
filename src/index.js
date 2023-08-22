const letters = require('./letters.json');
const letters_knife = require('./letters_knife.json');
const cangjie = require('./cangjie.json');

class PepperSpray {
  constructor(string, d = false) {
    this.debug = d;
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['people'];
          break;

        case 'behavior':
          result.wide = cangjie['water'];
          break;

        case 'result':
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['disaster'];
          break;

        case 'behavior':
          result.wide = cangjie['earth'];
          break;

        case 'result':
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['water'];
          break;

        case 'behavior':
          result.wide = cangjie['day'];
          break;

        case 'result':
          result.wide = cangjie['corpse'];
          break;
      }
    }

    this.result.push(result);
  }

  d(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['wood'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['people'];
          break;

        case 'behavior':
          result.wide = cangjie['dagger-axe'];
          break;

        case 'result':
          result.wide = cangjie['fire'];
          break;
      }
    }

    this.result.push(result);
  }

  e(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['people'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['mountain'];
          break;

        case 'behavior':
          result.wide = cangjie['corpse'];
          break;

        case 'result':
          result.wide = cangjie['big'];
          break;
      }
    }

    this.result.push(result);
  }

  f(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['shi'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'behavior':
          result.wide = cangjie['gold'];
          break;
      }
    }

    this.result.push(result);
  }

  g(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['earth'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'value':
          result.wide = cangjie['predict'];
          break;

        case 'function':
          result.wide = cangjie['female'];
          break;

        case 'behavior':
          result.wide = cangjie['people'];
          break;

        case 'result':
          result.wide = cangjie['middle'];
          break;
      }
    }

    this.result.push(result);
  }

  h(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['disaster'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'value':
          result.wide = cangjie['hand'];
          break;

        case 'function':
          result.wide = cangjie['water'];
          break;

        case 'behavior':
          result.wide = cangjie['gold'];
          break;

        case 'result':
          result.wide = cangjie['wood'];
          break;
      }
    }

    this.result.push(result);
  }

  i(word, w) {
    let _letters = [];
    let result = {
      word,
      wide: cangjie['value'],
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
    let syllable_letters = [];
    let n = [];

    result.web.forEach((_l, i) => {
      let letter_type_group = this.getType(_l.l);

      if (!syllable_letters.length) {
        syllable = true;
        syllable_letters.push(_l.l);

        n.push(_l.v);
      } else {
        let not_a_syllable_of = (letter) => { !letters_knife[letter]['waits_for'][letter_type_group].includes(_l.l) };
        let not_a_syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] === undefined };
        let syllable_after_of = (letter) => { return letters_knife[letter]['waits_for']['_after'][_l.l] };

        if (syllable_letters.length === 1 && not_a_syllable_of(syllable_letters[0])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length === 2 && not_a_syllable_after_of(syllable_letters[1])) {
          syllable_letters = [_l.l];

          n.push(_l.v);
        } else if (syllable_letters.length >= 3 && syllable_after_of(syllable_letters[1])) { //del
          let a = syllable_letters[0];
          let b = syllable_letters[1];
          let c = syllable_letters[2];
          let d = letters_knife[b]['waits_for']['_after'][c];

          let syllable_word = '';
          let size = syllable_letters.length;
          let word = a + b + c;
          let checksum = false;

          for (let i = 0; i < size; i++) syllable_word += syllable_letters[i];

          for (let i = 0; i < d.length; i++) if (!checksum && (word + d[i]).includes(syllable_word)) checksum = true;

          if (!checksum) {
            syllable_letters = [_l.l];

            n.push(_l.v);
          }
        } else {
          syllable_letters.push(_l.l);
        }
      }
    });

    if (this.debug) console.log(n);

    if (n.length >= 2) {
      switch(n[1]) {
        case 'function':
          result.wide = cangjie['value'];
          break;

        case 'behavior':
          result.wide = cangjie['value'];
          break;

        case 'result':
          result.wide = cangjie['value'];
          break;
      }
    }

    this.result.push(result);
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