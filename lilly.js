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
    parent: null,
    sents: [],
    stats: {
      words: 0,
      chars: 0
    },

    setParent: parent => {
      para.parent = parent
    },

    focus: () => {
      this.focus = true
    },

    select: () => {
      this.selected = true
    },

    append: sent => {
      Append(sent, para.sents)
    },

    prepend: sent => {
      Prepend(sent, para.sents)
    }
  }

  return para
}

const Sent = parent => {
  const sent = {
    type: 'sent',
    parent: null,
    words: [],
    stats: {
      words: 0,
      chars: 0
    },

    setParent: parent => {
      sent.parent = parent
    },

    focus: () => {
      this.focus = true
    },

    select: () => {
      this.selected = true
    },

    append: word => {
      Append(word, sent.words)

    },

    prepend: word => {
      Prepend(word, sent.words)
      char.setParent(word)
    }
  }

  return sent
}

const Word = parent => {
  const word = {
    type: 'word',
    parent,
    chars: [],
    stats: {
      chars: 0
    },

    setParent: parent => {
      word.parent = parent
    },

    focus: () => {
      this.focus = true
    },

    select: () => {
      this.selected = true
    },

    append: (char => {
      Append(char, word.chars)
    },

    prepend: char => {
      Prepend(char, word.chars)
      char.setParent(word)
    }
  }

  return word
}

const Char = () => {
  const char = {
    type: 'char',
    parent: null, 
    value: null,
    stats: {
      chars: 0
    },

    setParent: parent => {
      this.parent = parent
    },

    focus: () => {
      this.focus = true
    },

    select: () => {
      word.selected = true
    },

    setValue: value => {
      this.value = value
    }
  }

  return word
}

const init = () => {
  const root = Root()
  const para = Para()
  const sent = Sent()
  const word = Word()

  root.append(para)
  para.append(sent)
  sent.append(word)

  // word.select()

  const lilly = {
    root,
    selected: word
  }

  return lilly
}

module.exports = {
  Append,
  Prepend,
  Insert,
  Remove,
  init
}

