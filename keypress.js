const keypress = require('keypress')

const root => () {
  return {
    type: 'para',
    paras: [],
    stats: {
      sents: 0,
      paras: 0,
      words: 0,
      chars: 0
    }
  }
}

const para => () {
  return {
    type: 'para',
    sents: [],
    stats: {
      words: 0,
      chars: 0
    }
  }
}

const sent => () {
  return {
    type: 'para',
    sents: [],
    stats: {
      words: 0,
      chars: 0
    }
  }
}

keypress(process.stdin)

process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key)

  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause()
  }
})
 
process.stdin.setRawMode(true)
process.stdin.resume()
