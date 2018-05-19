const Append = (item, ary) => {
  let result = ary.slice()
  result.push(item)
  return result
}

const Prepend = (item, ary) => {
  let result = ary.slice()
  result.unshift(item)
  return result
}

const Insert = (item, ary, at) => {
  let result = ary.slice(0, at)
  result.push(item)
  result = result.concat(ary.slice(at))
  return result
}

const Remove = (ary, from, to) => {
  const pre = ary.slice(0, from)
  const post = ary.slice(to + 1 || from + 1)
  const result = pre.concat(post)
  return result
}

const Root = () => {
  const root = {
    type: 'para',
    paras: [],
    stats: {
      sents: 0,
      paras: 0,
      words: 0,
      chars: 0
    },
    append: para => {
      Append(para, root.paras)
    },
    prepend: para => {
      Prepend(para, root.paras)
    }
  }

  return root
}

const Para = () => {
  const para = {
    type: 'para',
    sents: [],
    stats: {
      words: 0,
      chars: 0
    }
  }

  return para
}

const Sent = () => {
  return {
    type: 'para',
    sents: [],
    stats: {
      words: 0,
      chars: 0
    }
  }
}

const Word = () => {
  return {
    type: 'word',
    sents: [],
    stats: {
      chars: 0
    }
  }
}

const init = () => {
  const root = Root()
  const para = Para()
  root.append(para)
}

module.exports = {
  Append,
  Prepend,
  Insert,
  Remove,
  init
}

