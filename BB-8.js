const chalk = require('chalk')

const tests = []
const results = []

const test = (name, fn) => {
  tests.push({name, fn})
}

const run = () => {
  tests.forEach((test, i) => {
    let result = 0

    const t = {
      pass: () => {
        return result = 1
      },

      fail: () => {
        return result = -1
      },

      is: (v1, v2) => {
        if (v1 === v2) {
          return result += 1
        } 

        return result -= 1
      }
    }

    test.fn(t)

    results[i] = result
  })

  results.forEach((result, i) => {
    if (result > 0) {
      console.log(chalk.green(tests[i].name + ' :pass'))
    } else {
      console.log(chalk.red(tests[i].name + ' :fail'))
    }
  })
}

module.exports = {
  test,
  run
}
