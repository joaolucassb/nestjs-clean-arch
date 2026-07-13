import { Entity } from "@/shared/domain/entities/entity";
import { InMemoryRepository } from "../../in-memory.repository";

type StubEntityProps = {
  name: string
  price: number
}

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepostitory extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepostitory;

  beforeEach(() => {
    sut = new StubInMemoryRepostitory();
  })

  it('Should inserts a new entity', async () => {
    const entity = new StubEntity({ name: 'test name', price: 50 });
    await sut.insert(entity)
    expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON());
  })
})
