import { faker } from '@faker-js/faker'

import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Instructor,
  InstructorProps,
} from '@/domain/forum/enterprise/entities/instructor'

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
