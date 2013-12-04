
/**
 * Moves object at inde
 *
 * @param {Number} from
 * @param {Number} to
 * @param {Array} arr
 * @return {Type}
 * @api public
 */

module.exports = function (from, to, arr) {
  arr = arr || this
  if (to >= arr.length) {
    var k = to - arr.length
    while ((k--) + 1) {
      arr.push(undefined)
    }
  }
  arr.splice(to, 0, arr.splice(from, 1)[0])
}