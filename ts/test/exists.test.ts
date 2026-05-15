
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FinalSpaceSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FinalSpaceSDK.test()
    equal(null !== testsdk, true)
  })

})
