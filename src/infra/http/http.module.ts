import { Module } from '@nestjs/common'

import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/question/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/question/fetch-recent-questions'
import { CreateAccountStudentController } from './controllers/student/create-account-student.controller'
import { AuthenticateStudentController } from './controllers/student/authenticate-student.controller'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/student/register-student'
import { RegisterInstructorUseCase } from '@/domain/forum/application/use-cases/instructor/register-instructor'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/student/authenticate-student'
import { AuthenticateInstructorUseCase } from '@/domain/forum/application/use-cases/instructor/authenticate-instructor'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { AuthenticateInstructorController } from './controllers/instructor/authenticate-instructor.controller'
import { CreateAccountInstructorController } from './controllers/instructor/create-account-instructor.controller'
import { GetQuestionBySlugController } from './controllers/question/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/question/get-question-by-slug'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountStudentController,
    AuthenticateStudentController,
    AuthenticateInstructorController,
    CreateAccountInstructorController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    RegisterInstructorUseCase,
    AuthenticateStudentUseCase,
    AuthenticateInstructorUseCase,
    GetQuestionBySlugUseCase,
  ],
})
export class HttpModule {}
