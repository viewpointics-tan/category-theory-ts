import { fn, increment } from '../src/simpleCategory'

describe('arrow test', (): void => {
  test('increment', (): void => {
    const n: number = increment.fomula(5)
    expect(n).toBe(6)
  })

  test('composition', (): void => {
    const n: number = increment.then(increment).fomula(5)
    expect(n).toBe(7)
  })
})
