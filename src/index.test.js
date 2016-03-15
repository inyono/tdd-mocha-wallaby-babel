/* eslint-env mocha */
import unexpected from 'unexpected'

const expect = unexpected.clone()

describe('test', () => {
  it('fails', () => {
    expect(true, 'to be false')
  })
})
