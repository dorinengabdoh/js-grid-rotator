'use strict'
const input = document.getElementById('word')
const output = document.getElementById('display')
const but = document.getElementById('check-btn')
const secretMessages = [
  { number: 1, message: 'wink' },
  { number: 10, message: 'double blink' },
  { number: 100, message: 'close your eyes' },
  { number: 1000, message: 'jump' }
]
const convertToBinary = (number) => {
  let binary = ''
  while (number > 0) {
    binary = (number % 2) + binary
    number = parseInt(number / 2)
  }
  return binary
}
// <!--eslint-disable-line -->
document.addEventListener('DOMContentLoaded', () => {
  const display = () => {
    const binaryNumber = convertToBinary(input.value)
    const arrBin = binaryNumber.split('') // split the binary string into an array
    const reverseArrBin = arrBin.reverse()
    const message = []
    for (let i = 0; i < Math.min(reverseArrBin.length, secretMessages.length); i++) {
      if (reverseArrBin[i] === '1') {
        // for (let i = 0; i < reverseArrBin.length; i++) {
        if (i < secretMessages.length && reverseArrBin[i] === '1') {
          message.push(secretMessages[i].message)
        }
        // }

        if (binaryNumber.length >= 5 && binaryNumber[binaryNumber.length - 5] === '1') {
          message.reverse()
        }
        output.innerHTML = message.join(',')
      }
    }
  }
  but.addEventListener('click', display)
})
