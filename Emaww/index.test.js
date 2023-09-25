const getCookieKey = require('./index')

describe('Testing functions', () => {
  test('should test getCookieObject Function', () => {
    const objTest = {
      _: 'NAME',
      $: 'Host',
    }
    expect(getCookieKey(objTest)).toBe({ key: 'cookie:Host:NAME' })
  })
})
