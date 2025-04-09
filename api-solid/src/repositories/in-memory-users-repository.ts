import type { Prisma, User } from '@prisma/client'
import type { UsersRepository } from './users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[] = []

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user: User = {
      id: (Math.random() * 1000).toString(), // Generate a mock ID
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }
    this.users.push(user)
    return user
  }
}
