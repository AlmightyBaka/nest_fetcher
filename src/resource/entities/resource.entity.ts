import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType()
export class Resource {
  /**
   * ID of the resource
   */
  @Field(() => ID)
  id: number
  /**
   * Datetime the resource was fetched at
   */
  createdAt: Date
  /**
   * Body that the fetched resource returned
   */
  body: string
}
