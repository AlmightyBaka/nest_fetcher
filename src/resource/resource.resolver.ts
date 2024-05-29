import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { ResourceService } from './resource.service'
import { Resource } from './entities/resource.entity'

@Resolver(() => Resource)
export class ResourceResolver {
  constructor(private readonly resourceService: ResourceService) {}

  @Query(() => [Resource], { name: 'resource' })
  findAll() {
    return this.resourceService.findAll()
  }

  @Query(() => Resource, { name: 'resource' })
  findOneById(@Args('id', { type: () => Int }) id: number) {
    return this.resourceService.findOneById(id)
  }

  @Query(() => Resource, { name: 'resourceByDate' })
  findOneByDate(@Args('date', { type: () => Date }) date: Date) {
    return this.resourceService.findOneByDate(date)
  }

  @Mutation(() => Resource)
  removeResource(@Args('id', { type: () => Int }) id: number) {
    return this.resourceService.remove(id)
  }
}
