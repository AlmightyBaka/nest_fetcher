import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class ResourceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ResourceCreateInput) {
    return await this.prisma.resource.create({
      data,
    })
  }

  async findAll() {
    return await this.prisma.resource.findMany()
  }

  async findOneById(id: number) {
    return await this.prisma.resource.findUnique({
      where: {
        id,
      },
    })
  }

  async findOneByDate(date: Date) {
    return await this.prisma.resource.findFirst({
      where: {
        createdAt: date,
      },
    })
  }

  async remove(id: number) {
    return await this.prisma.resource.delete({
      where: {
        id,
      },
    })
  }
}
