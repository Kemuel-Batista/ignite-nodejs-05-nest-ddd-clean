import { Module } from '@nestjs/common'

import { DatabaseModule } from '../database/database.module'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { StorageModule } from '../storage/storage.module'

import { AnswerQuestionController } from './controllers/answer/answer-question.controller'
import { ChooseQuestionBestAnswerController } from './controllers/answer/choose-question-best-answer.controller'
import { CommentOnAnswerController } from './controllers/answer/comment-on-answer.controller'
import { DeleteAnswerCommentController } from './controllers/answer/delete-answer-comment.controller'
import { DeleteAnswerController } from './controllers/answer/delete-answer.controller'
import { EditAnswerController } from './controllers/answer/edit-answer.controller'
import { FetchAnswerCommentsController } from './controllers/answer/fetch-answer-comments.controller'
import { FetchQuestionAnswersController } from './controllers/answer/fetch-question-answers.controller'
import { CommentOnQuestionController } from './controllers/question/comment-on-question.controller'
import { CreateQuestionController } from './controllers/question/create-question.controller'
import { DeleteQuestionCommentController } from './controllers/question/delete-question-comment.controller'
import { DeleteQuestionController } from './controllers/question/delete-question.controller'
import { EditQuestionController } from './controllers/question/edit-question.controller'
import { FetchQuestionCommentsController } from './controllers/question/fetch-question-comments.controller'
import { FetchRecentQuestionsController } from './controllers/question/fetch-recent-questions.controller'
import { GetQuestionBySlugController } from './controllers/question/get-question-by-slug.controller'
import { CreateAccountStudentController } from './controllers/student/create-account-student.controller'
import { AuthenticateStudentController } from './controllers/student/authenticate-student.controller'
import { ReadNotificationController } from './controllers/read-notification.controller'

import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer/answer-question'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/answer/choose-question-best-answer'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/answer/comment-on-answer'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/answer/delete-answer'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/answer/delete-answer-comment'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/answer/edit-answer'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/answer/fetch-answer-comments'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/answer/fetch-question-answers'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/question/comment-on-question'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/question/create-question'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/question/delete-question'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/question/delete-question-comment'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/question/edit-question'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/question/fetch-question-comments'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/question/fetch-recent-questions'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/question/get-question-by-slug'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/student/authenticate-student'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/student/register-student'
import { UploadAttachmentController } from './controllers/upload-attachment.controller'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/uploads/upload-and-create-attachment'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    CreateAccountStudentController,
    AuthenticateStudentController,
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
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
    ReadNotificationController,
  ],
  providers: [
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
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
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
    ReadNotificationUseCase,
  ],
})
export class HttpModule {}
