import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  HttpCode,
  Post,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../../pipes/zod-validation-pipe'
import { RegisterInstructorUseCase } from '@/domain/forum/application/use-cases/instructor/register-instructor'
import { InstructorAlreadyExistsError } from '@/domain/forum/application/use-cases/instructor/errors/instructor-already-exists-erros'
import { Public } from '@/infra/auth/public'

const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type CreateAccountBodySchema = z.infer<typeof createAccountBodySchema>

@Controller('/accounts')
@Public()
export class CreateAccountInstructorController {
  constructor(private registerInstructor: RegisterInstructorUseCase) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAccountBodySchema))
  async handle(@Body() body: CreateAccountBodySchema) {
    const { name, email, password } = body

    const result = await this.registerInstructor.execute({
      name,
      email,
      password,
    })

    if (result.isError()) {
      const error = result.value

      switch (error.constructor) {
        case InstructorAlreadyExistsError:
          throw new ConflictException(error.message)
        default:
          throw new BadRequestException(error.message)
      }
    }
  }
}
