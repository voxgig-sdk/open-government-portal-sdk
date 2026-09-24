
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OpenGovernmentPortalSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OpenGovernmentPortalSDK.test()
    equal(testsdk instanceof OpenGovernmentPortalSDK, true,
      'OpenGovernmentPortalSDK.test() must return a client synchronously')
  })

})
