import { Prisma, Attachment as PrismaAttachment } from '@prisma/client'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'

export class PrismaQuestionAttachmentMapper {
  static toDomain(raw: PrismaAttachment): QuestionAttachment {
    if (!raw.questionId) {
      throw new Error('Invalid attachment type.')
    }

    return QuestionAttachment.create(
      {
        attachmentId: new UniqueEntityID(raw.id),
        questionId: new UniqueEntityID(raw.questionId),
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPersistencyUpdateMany(
    raw: QuestionAttachment[],
  ): Prisma.AttachmentUpdateManyArgs {
    const attachmentsIds = raw.map((attachment) => {
      return attachment.attachmentId.toString()
    })

    return {
      where: {
        id: {
          in: attachmentsIds,
        },
      },
      data: {
        questionId: raw[0].questionId.toString(),
      },
    }
  }
}
