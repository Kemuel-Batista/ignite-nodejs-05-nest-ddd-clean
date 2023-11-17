import { User as PrismaInstructor, Prisma } from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Instructor } from '@/domain/forum/enterprise/entities/instructor'

export class PrismaInstructorMapper {
  static toDomain(raw: PrismaInstructor): Instructor {
    return Instructor.create(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPersistency(raw: Instructor): Prisma.UserUncheckedCreateInput {
    return {
      id: raw.id.toString(),
      name: raw.name,
      email: raw.email,
      password: raw.password,
    }
  }
}
