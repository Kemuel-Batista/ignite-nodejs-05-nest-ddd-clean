import { InstructorsRepository } from '@/domain/forum/application/repositories/instructors-repository'
import { Instructor } from '@/domain/forum/enterprise/entities/instructor'

export class InMemoryInstructorsRepository implements InstructorsRepository {
  public items: Instructor[] = []

  async findByEmail(email: string) {
    const instructor = this.items.find((item) => item.email === email)

    if (!instructor) {
      return null
    }

    return instructor
  }

  async create(instructor: Instructor) {
    this.items.push(instructor)
  }
}
