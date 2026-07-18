import { Entity } from '@/shared/domain/entities/entity';
import { InMemorySearchableRepository } from '../../in-memory-searchable.repository';

type StubEntityProps = {
  name: string;
  price: number;
};

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemorySearchableRepostitory extends InMemorySearchableRepository<StubEntity> {
  sortableFields: string[] = ['name'];

  protected async applyFilter(
    items: StubEntity[],
    filter: string | null,
  ): Promise<StubEntity[]> {
    if (!filter) {
      return items;
    }

    return items.filter(item => {
      return item.props.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemorySearchableRepostitory;

  beforeEach(() => {
    sut = new StubInMemorySearchableRepostitory();
  });

  describe('applyFilter method', () => {
    it('', async () => {});
  });

  describe('applySort method', () => {});

  describe('applyPaginate method', () => {});

  describe('search method', () => {});
});
