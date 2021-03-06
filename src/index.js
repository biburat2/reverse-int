module.exports = function reverse (n) {
    let res = n
  if (n < 0){ res = (n * -1) }
  return String(res).split('').reverse().join('')
}
  


