const dictionary = require('dictionary-en-us')
const nspell = require('nspell')

const callback = (err, dict) => {
  if (err) {
    throw err
  }

  const spell = nspell(dict)
  console.log(spell.correct('colour'))
  console.log(spell.suggest('colour'))
  spell.add('npm')
  console.log(spell.correct('npm'))
}

dictionary(callback)
