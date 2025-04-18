import { describe } from 'node:test'
import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { CheckInUseCase } from './check-in'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInUseCase

describe('Check-in use case', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(checkInsRepository)

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    vi.setSystemTime(new Date('2025-01-01T00:00:00Z'))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date('2025-01-01T00:00:00Z'))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    await expect(() =>
      sut.execute({
        gymId: 'gym-01',
        userId: 'user-01',
      })
    ).rejects.toBeInstanceOf(Error)
  })

  it('should not be able to check in twice but in different days', async () => {
    vi.setSystemTime(new Date('2025-01-01T00:00:00Z'))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    vi.setSystemTime(new Date('2025-01-02T00:00:00Z'))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
