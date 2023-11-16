import { DomainEvents } from '@/core/events/domain-events'
import { EventHandler } from '@/core/events/event-handler'
import { SendNotificationUseCase } from '../use-cases/send-notification'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { AnswerCommentEvent } from '@/domain/forum/enterprise/events/answer-comment-event'

export class OnAnswerCommentEvent implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendAnswerCommentNotification.bind(this),
      AnswerCommentEvent.name,
    )
  }

  private async sendAnswerCommentNotification({
    answerComment,
  }: AnswerCommentEvent) {
    const answer = await this.answersRepository.findById(
      answerComment.answerId.toString(),
    )

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Existe um comentário para a sua resposta!`,
        content: `A resposta que você enviou em "${answer.content
          .substring(0, 20)
          .concat('...')}" tem um novo comentário!`,
      })
    }
  }
}
