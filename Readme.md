
# move

  Changes objects position within an array

## Installation

  Install with [component(1)](http://component.io):

    $ component install esundahl/move

## API

#### move(from, to [, arr])

Moves the item contained in `arr` from the `from` index to the `to` index. If no `arr` is specified the method will act on this instead.
  
As a function
  
```js
var move = require('move')
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
move(2, 7, arr)
assert(arr[7] === 3)
```

As a method

```js
var move = require('move')
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.move = move
arr.move(3, 6)
assert(arr[6] === 4)
```


## License

(The MIT License)

Copyright (c) 2013 Erik Sundahl esundahl@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
