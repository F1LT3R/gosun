const {test, run} = require('./BB-8')
const lilly = require('./lilly')

test('Append', t => {
  const ary = ['A']
  const result = lilly.Append('B', ary)
  t.is(result[0], 'A')
  t.is(result[1], 'B')
})

test('Prepend', t => {
  const ary = ['B']
  const result = lilly.Prepend('A', ary)
  t.is(result[0], 'A')
  t.is(result[1], 'B')
})

test('Insert', t => {
  const ary = ['A', 'C']
  const result = lilly.Insert('B', ary, 1)
  t.is(result[0], 'A')
  t.is(result[1], 'B')
  t.is(result[2], 'C')
})

test('Remove single item', t => {
  const ary = ['A', 'B', 'C']
  const result = lilly.Remove(ary, 1)
  t.is(result[0], 'A')
  t.is(result[1], 'C')
})

test('Remove range of items', t => {
  const ary = ['A', 'C', 'B', 'D']
  const result = lilly.Remove(ary, 1, 2)
  t.is(result[0], 'A')
  t.is(result[1], 'D')
  console.log(result)
})

// test('Init (root, para, sentence, selected)', t => {
//   const result = lilly.init()
//   console.log(result)
// })

run()

