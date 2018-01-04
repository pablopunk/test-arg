const test = require('ava')
const m = require('.')

test('Returns true for primitives', t => {
  t.is(m(1), true)
  t.is(m(-1), true)
  t.is(m(2.0), true)
  t.is(m(''), true)
  t.is(m('foo'), true)
})

test('Returns true for true/false', t => {
  t.is(m(true), true)
  t.is(m(false), true)
})

test('Returns true for objects', t => {
  t.is(m({}), true)
  t.is(m({foo: 'bar'}), true)
})

test('Returns true for null', t => {
  t.is(m(null), true)
})

test('Returns false for undefined/empty', t => {
  t.is(m(undefined), false)
  t.is(m(), false)
})
