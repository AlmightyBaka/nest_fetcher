import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ResourceModule } from '../resource/resource.module'
import { FetcherService } from '../fetcher/fetcher.service'
import { ResourceService } from 'src/resource/resource.service'
import { PrismaService } from 'src/db/prisma.service'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    ScheduleModule.forRoot(),
    ResourceModule,
  ],
  controllers: [AppController],
  providers: [AppService, FetcherService, ResourceService, PrismaService],
})
export class AppModule {}
