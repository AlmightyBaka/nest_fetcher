import { Module } from '@nestjs/common'
import { ResourceService } from './resource.service'
import { ResourceResolver } from './resource.resolver'
import { PrismaService } from 'src/db/prisma.service'

@Module({
  providers: [ResourceResolver, ResourceService, PrismaService],
})
export class ResourceModule {}
