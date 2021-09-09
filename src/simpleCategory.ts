interface Arrow<a, b> {
  fomula: (_: a) => b
  then: <c>(fomula: Arrow<b, c>) => Arrow<a, c>
}
const fn = <a, b>(fomula: (_: a) => b): Arrow<a, b> => ({
  fomula,
  then<c>(this: Arrow<a, b>, g: Arrow<b, c>): Arrow<a, c> {
    return fn<a, c>((x) => g.fomula(this.fomula(x)))
  },
})

const increment: Arrow<number, number> = fn((x) => x + 1)

export { fn, increment }
