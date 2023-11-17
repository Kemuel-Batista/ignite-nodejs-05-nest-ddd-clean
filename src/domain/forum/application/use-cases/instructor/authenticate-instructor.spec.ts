import { InMemoryInstructorsRepository } from 'test/repositories/in-memory-instructors-repository'
import { FakeHasher } from 'test/cryptography/fake-hasher'
import { FakeEncrypter } from 'test/cryptography/fake-encrypter'
import { AuthenticateInstructorUseCase } from './authenticate-instructor'
import { makeInstructor } from 'test/factories/make-instructor'

let inMemoryInstructorsRepository: InMemoryInstructorsRepository
let fakeHasher: FakeHasher
let encrypter: FakeEncrypter

let sut: AuthenticateInstructorUseCase

describe('Authenticate Instructor', () => {
  beforeEach(() => {
    inMemoryInstructorsRepository = new InMemoryInstructorsRepository()
    fakeHasher = new FakeHasher()
    encrypter = new FakeEncrypter()

    sut = new AuthenticateInstructorUseCase(
      inMemoryInstructorsRepository,
      fakeHasher,
      encrypter,
    )
  })

  it('should be able to authenticate a instructor', async () => {
    const instructor = makeInstructor({
      email: 'johndoe@example.com',
      password: await fakeHasher.hash('123456'),
    })

    inMemoryInstructorsRepository.items.push(instructor)

    const result = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456',
    })

    expect(result.isSuccess()).toBe(true)
    expect(result.value).toEqual({
      accessToken: expect.any(String),
    })
  })
})
