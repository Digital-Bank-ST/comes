import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CheckersFilesService } from './checkers_files.service';
import { CheckersFiles } from './entities/checkers_files.entity';
import { CreateCheckersFilesInput } from './dto/create-checkers_files.input';
import { UpdateCheckersFilesInput } from './dto/update-checkers_files.input';

@Resolver(() => CheckersFiles)
export class CheckersFilesResolver {
  constructor(private readonly checkersFilesService: CheckersFilesService) {}

  @Mutation(() => CheckersFiles)
  async createCheckersFile(
    @Args('createCheckersFilesInput') createCheckersFilesInput: CreateCheckersFilesInput,
  ) {
    // La subida de archivos se maneja a través del controlador REST
    throw new Error('Use the REST endpoint to upload files');
  }

  @Query(() => [CheckersFiles], { name: 'checkersFiles' })
  findAll() {
    return this.checkersFilesService.findAll();
  }

  @Query(() => CheckersFiles, { name: 'checkersFile' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.checkersFilesService.findOne(id);
  }

  @Mutation(() => CheckersFiles)
  async updateCheckersFile(
    @Args('updateCheckersFilesInput') updateCheckersFilesInput: UpdateCheckersFilesInput,
  ) {
    // La subida de archivos se maneja a través del controlador REST
    throw new Error('Use the REST endpoint to update files');
  }

  @Mutation(() => Int)
  removeCheckersFile(@Args('id', { type: () => Int }) id: number) {
    return this.checkersFilesService.remove(id).then(result => result.id);
  }
}