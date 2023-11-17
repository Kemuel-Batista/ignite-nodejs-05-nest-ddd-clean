import { Instructor } from '../../enterprise/entities/instructor'

export abstract class InstructorsRepository {
  abstract findByEmail(id: string): Promise<Instructor | null>
  abstract create(instructor: Instructor): Promise<void>
}
