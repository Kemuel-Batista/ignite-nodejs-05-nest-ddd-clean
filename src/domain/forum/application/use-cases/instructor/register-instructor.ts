import { Either, failure, success } from '@/core/either'
import { Instructor } from '@/domain/forum/enterprise/entities/instructor'
import { InstructorsRepository } from '../../repositories/instructors-repository'
import { HashGenerator } from '../../cryptography/hash-generator'
import { InstructorAlreadyExistsError } from './errors/instructor-already-exists-erros'

interface RegisterInstructorUseCaseRequest {
  name: string
  email: string
  password: string
}

type RegisterInstructorUseCaseResponse = Either<
  InstructorAlreadyExistsError,
  {
    instructor: Instructor
  }
>

export class RegisterInstructorUseCase {
  constructor(
    private instructorsRepository: InstructorsRepository,
    private hashGenerator: HashGenerator,
  ) {}

  async execute({
    name,
    email,
    password,
  }: RegisterInstructorUseCaseRequest): Promise<RegisterInstructorUseCaseResponse> {
    const instructorWithSameEmail =
      await this.instructorsRepository.findByEmail(email)

    if (instructorWithSameEmail) {
      return failure(new InstructorAlreadyExistsError(email))
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const instructor = Instructor.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.instructorsRepository.create(instructor)

    return success({
      instructor,
    })
  }
}
