import { RegisterInstructorUseCase } from './register-instructor'
import { InMemoryInstructorsRepository } from 'test/repositories/in-memory-instructors-repository'
import { FakeHasher } from 'test/cryptography/fake-hasher'

let inMemoryInstructorsRepository: InMemoryInstructorsRepository
let fakeHasher: FakeHasher
let sut: RegisterInstructorUseCase

describe('Register Instructor Use Case', () => {
  beforeEach(() => {
    inMemoryInstructorsRepository = new InMemoryInstructorsRepository()
    fakeHasher = new FakeHasher()
    sut = new RegisterInstructorUseCase(
      inMemoryInstructorsRepository,
      fakeHasher,
    )
  })

  it('should be able to register a new instructor', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    expect(result.isSuccess()).toBe(true)
    expect(result.value).toEqual({
      instructor: inMemoryInstructorsRepository.items[0],
    })
  })

  it('should hash instructor password upon registration', async () => {
    const result = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    const hashedPassword = await fakeHasher.hash('123456')

    expect(result.isSuccess()).toBe(true)
    expect(inMemoryInstructorsRepository.items[0].password).toEqual(
      hashedPassword,
    )
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'johndoe@example.com'

    await sut.execute({
      name: 'John Doe',
      email,
      password: '123456',
    })

    const result = await sut.execute({
      name: 'John Doe',
      email,
      password: '123456',
    })

    expect(result.isError()).toBe(true)
  })
})
