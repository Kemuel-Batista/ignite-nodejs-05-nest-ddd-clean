import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/database.module'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { hash } from 'bcryptjs'
import request from 'supertest'
import { InstructorFactory } from 'test/factories/make-instructor'

describe('Authenticate Instructor (E2E)', () => {
  let app: INestApplication
  let instructorFactory: InstructorFactory

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [InstructorFactory],
    }).compile()

    app = moduleRef.createNestApplication()

    await app.init()
  })

  test('[POST] /sessions', async () => {
    await instructorFactory.makePrismaInstructor({
      email: 'johndoe@example.com',
      password: await hash('123456', 8),
    })

    const response = await request(app.getHttpServer()).post('/sessions').send({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({
      access_token: expect.any(String),
    })
  })
})
