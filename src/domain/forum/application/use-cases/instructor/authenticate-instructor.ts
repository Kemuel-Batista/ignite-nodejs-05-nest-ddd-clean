import { Either, failure, success } from '@/core/either'
import { InstructorsRepository } from '../../repositories/instructors-repository'
import { HashComparer } from '../../cryptography/hash-comparer'
import { Encrypter } from '../../cryptography/encrypter'
import { WrongCredentialsError } from '@/core/errors/errors/wrong-credentials-error'

interface AuthenticateInstructorUseCaseRequest {
  email: string
  password: string
}

type AuthenticateInstructorUseCaseResponse = Either<
  WrongCredentialsError,
  {
    accessToken: string
  }
>

export class AuthenticateInstructorUseCase {
  constructor(
    private instructorsRepository: InstructorsRepository,
    private hashComparer: HashComparer,
    private encrypter: Encrypter,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateInstructorUseCaseRequest): Promise<AuthenticateInstructorUseCaseResponse> {
    const instructor = await this.instructorsRepository.findByEmail(email)

    if (!instructor) {
      return failure(new WrongCredentialsError())
    }

    const isPasswordValid = await this.hashComparer.compare(
      password,
      instructor.password,
    )

    if (!isPasswordValid) {
      return failure(new WrongCredentialsError())
    }

    const accessToken = await this.encrypter.encrypt({
      sub: instructor.id.toString(),
    })

    return success({
      accessToken,
    })
  }
}
