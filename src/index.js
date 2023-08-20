const letters = {
  a: 'value',
  b: 'value',
  c: 'value',
  d: 'function',
  e: 'value',
  f: 'function',
  g: 'function',
  h: 'place',
  i: 'value',
  j: 'function',
  k: 'value',
  l: 'behavior',
  m: 'value',
  n: 'function',
  o: 'value',
  p: 'place',
  q: 'place',
  r: 'behavior',
  s: 'behavior',
  t: 'function',
  u: 'value',
  v: 'place',
  w: 'time',
  x: 'function',
  y: 'place',
  z: 'behavior',
};

export default class PepperSpray {
	constructor(string) {
		this.phrase = string;
		this.result = null;

    this.parse();
    this.translate();
	}

  parse() {
    this.phrase = this.phrase.split(' ');
  }

  translate() {
    this.phrase.forEach((word) => {
      let f = Object.values(word)[0];
    });
  }

  a() {

  }

  b() {

  }

  c() {

  }

  d() {
    
  }

  e() {
    
  }

  f() {
    
  }

  g() {
    
  }

  h() {
    
  }

  i() {
    
  }

  j() {
    
  }

  k() {
    
  }

  l() {
    
  }

  m() {
    
  }

  n() {
    
  }

  o() {
    
  }

  p() {
    
  }

  q() {
    
  }

  r() {
    
  }

  s() {
    
  }

  t() {
    
  }

  u() {

  }

  v() {
    
  }

  w() {
    
  }

  x() {
    
  }

  y() {
    
  }

  z() {
    
  }
}