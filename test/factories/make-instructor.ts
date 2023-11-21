import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Instructor,
  InstructorProps,
} from '@/domain/forum/enterprise/entities/instructor'
import { PrismaInstructorMapper } from '@/infra/database/prisma/mappers/prisma-instructor-mapper'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { Injectable } from '@nestjs/common'

export function makeInstructor(
  override: Partial<InstructorProps> = {},
  id?: UniqueEntityID,
) {
  const instructor = Instructor.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id,
  )

  return instructor
}

@Injectable()
export class InstructorFactory {
  constructor(private prisma: PrismaService) {}

  async makePrismaInstructor(
    data: Partial<InstructorProps> = {},
  ): Promise<Instructor> {
    const instructor = makeInstructor(data)

    await this.prisma.user.create({
      data: PrismaInstructorMapper.toPersistency(instructor),
    })

    return instructor
  }
}
