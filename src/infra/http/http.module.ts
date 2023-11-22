import { Module } from '@nestjs/common'

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
import { FetchRecentQuestionsController } from './controllers/question/fetch-recent-questions.controller'
import { CreateQuestionController } from './controllers/question/create-question.controller'
import { EditQuestionController } from './controllers/question/edit-question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/question/edit-question'
import { DeleteQuestionController } from './controllers/question/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/question/delete-question'
import { AnswerQuestionController } from './controllers/answer/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer/answer-question'
import { EditAnswerController } from './controllers/answer/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/answer/edit-answer'
import { DeleteAnswerController } from './controllers/answer/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/answer/delete-answer'
import { FetchQuestionAnswersController } from './controllers/answer/fetch-question-answers.controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/answer/fetch-question-answers'
import { ChooseQuestionBestAnswerController } from './controllers/answer/choose-question-best-answer.controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/answer/choose-question-best-answer'
import { CommentOnQuestionController } from './controllers/question/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/question/comment-on-question'
import { DeleteQuestionCommentController } from './controllers/question/delete-question-comment.controller'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/question/delete-question-comment'

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
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    RegisterInstructorUseCase,
    AuthenticateStudentUseCase,
    AuthenticateInstructorUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
  ],
})
export class HttpModule {}
