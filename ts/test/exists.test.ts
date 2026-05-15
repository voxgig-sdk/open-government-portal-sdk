
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenGovernmentPortalSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OpenGovernmentPortalSDK.test()
    equal(null !== testsdk, true)
  })

})
