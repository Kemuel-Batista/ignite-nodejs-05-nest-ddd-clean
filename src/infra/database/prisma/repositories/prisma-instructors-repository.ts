import { Injectable } from '@nestjs/common'
import { Instructor } from '@/domain/forum/enterprise/entities/instructor'
import { PrismaService } from '../prisma.service'
import { PrismaInstructorMapper } from '../mappers/prisma-instructor-mapper'
import { InstructorsRepository } from '@/domain/forum/application/repositories/instructors-repository'

@Injectable()
export class PrismaInstructorsRepository implements InstructorsRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Instructor | null> {
    const instructor = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!instructor) {
      return null
    }

    return PrismaInstructorMapper.toDomain(instructor)
  }

  async create(instructor: Instructor): Promise<void> {
    const data = PrismaInstructorMapper.toPersistency(instructor)

    await this.prisma.user.create({
      data,
    })
  }
}
