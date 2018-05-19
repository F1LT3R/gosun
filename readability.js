const colemanLiau = require('coleman-liau')
const Lexed = require('lexed').Lexed

const text = "Which wrist watches are swiss wrist watches? But what Mr. Smith?!"
const lexed = new Lexed(text)
const sentences = lexed.sentenceLevel().length
console.log(sentences)
const words = text.split(' ').length
console.log(words)
process.exit()
const chars = lex.characterLevel().length

console.log(sentences)
console.log(words)
console.log(chars)

//console.log(colemanLiau)



