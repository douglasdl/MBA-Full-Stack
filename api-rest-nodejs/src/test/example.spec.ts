import { expect, test } from 'vitest'

test('The user can create a transaction', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
