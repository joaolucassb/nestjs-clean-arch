import { UserRepository } from '@/users/domain/repositories/user.repository';

export namespace GetUserUseCase {
  export type Input = {
    id: string;
  };

  export type OutPut = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
  };

  export class UseCase {
    constructor(private userRepository: UserRepository.Repository) {}

    async execute(input: Input): Promise<OutPut> {
      const entity = await this.userRepository.findById(input.id);
      return entity.toJSON();
    }
  }
}
