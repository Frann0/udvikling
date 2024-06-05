import {sum} from '../test'
import { describe, it, expect } from 'vitest'

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

