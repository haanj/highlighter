import { parse } from './parse'

describe('.raw', () => {
  it.each([
    'foo',
    'bar',
    '<div>hello</div>',
    '<script>alert("hacked")</script>',
    'new\nline'
  ])('should match the original input: %s', input => {
    expect(parse(input).raw).toEqual(input)
  })
})