import { Prisma, Attachment as PrismaAttachment } from '@prisma/client'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class PrismaAttachmentMapper {
  static toDomain(raw: PrismaAttachment): Attachment {
    return Attachment.create(
      {
        title: raw.title,
        url: raw.url,
      },
      new UniqueEntityID(raw.id),
    )
  }

  static toPersistency(raw: Attachment): Prisma.AttachmentUncheckedCreateInput {
    return {
      id: raw.id.toString(),
      title: raw.title,
      url: raw.url,
    }
  }
}
