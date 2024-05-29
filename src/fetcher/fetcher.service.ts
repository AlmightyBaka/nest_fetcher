import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Interval } from '@nestjs/schedule'
import { ResourceService } from 'src/resource/resource.service'

@Injectable()
export class FetcherService {
  private readonly logger = new Logger(FetcherService.name)

  constructor(
    private configService: ConfigService,
    private resourceService: ResourceService,
  ) {}

  @Interval(300 * 1000)
  async fetch() {
    this.logger.verbose('Trying to fetch data at URL...')

    // saving datetime before making the request
    // instead of using automatic datetime on db insertion,
    // as fetching data from external services can introduce delay
    const date = new Date()
    const url = this.configService.getOrThrow<string>('FETCH_URL')

    try {
      const res = await fetch(url)

      if (res.status !== 200) {
        throw new Error(
          `Server returned non-200 code: ${res.status} ${res.statusText}`,
        )
      }

      const body = await res.text()
      await this.resourceService.create({
        body,
        createdAt: date,
      })

      this.logger.verbose('Finished fetching data')
    } catch (error) {
      this.logger.error(`Encountered error while fetching data: ${error}`)
    }
  }
}
