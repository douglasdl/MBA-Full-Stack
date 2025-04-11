import { describe } from 'node:test'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { hash } from 'bcryptjs'
import { beforeEach, expect, it } from 'vitest'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { GetUserProfileUseCase } from './get-user-profile.ts'

let usersRepository: InMemoryUsersRepository
let sut: GetUserProfileUseCase

describe('Get User Profile use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'Douglas Dias Leal',
      email: 'douglas_san@hotmail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.name).toEqual('Douglas Dias Leal')
    expect(user.email).toEqual('douglas_san@hotmail.com')
  })

  it('should not be able to get user profile with wrong id', async () => {
    expect(() =>
      sut.execute({
        userId: 'non-existing-id',
      })
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
