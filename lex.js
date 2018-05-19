const Lexed = require('lexed').Lexed

// console.log(lex)

const sentence = "This is a test Mr. Smith. This is a test."
const lex = new Lexed(sentence)
const result = lex.sentenceLevel()

console.log(result)

