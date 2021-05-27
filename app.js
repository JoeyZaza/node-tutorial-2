const _ = require('lodash')
const items = [1, [4, 2], [1, [3]], 10]

const newItems = _.flattenDeep(items)

console.log(newItems)
