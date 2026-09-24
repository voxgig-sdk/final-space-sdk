
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FinalSpaceSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FinalSpaceSDK.test()
    equal(testsdk instanceof FinalSpaceSDK, true,
      'FinalSpaceSDK.test() must return a client synchronously')
  })

})
