import { parse } from './parse'

describe('.raw', () => {
  it.each([
    'foo',
    'bar',
    '<div>hello</div>',
    '<script>alert("hacked")</script>',
    'new\nline',
    `This is a whole freakin' sentence I'd come up with. Two sentences, even!`
  ])('should match the original input: %s', input => {
    expect(parse(input).raw).toEqual(input)
  })
})

describe('.common', () => {
  const cases = [
    {
      input: `This should return all all All words said said at least three times three three should.`,
      expected: ['all', 'three']
    },
    {
      input: 'Foo bar foo foo bar bar. -asf- bar.',
      expected: ['foo', 'bar']
    }
  ]

  it.each(cases)('should return list of words repeated 3 or more times', ({input, expected}) => {
    expect(parse(input).common).toEqual(expected)
  })
})