/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const helper = new Map([
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ])
  const stack = []
  for (const item of s) {
    if (helper.has(item)) {
      stack.push(helper.get(item))
    } else {
      if (item !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}

const s = "{[])}"

console.log(isValid(s))