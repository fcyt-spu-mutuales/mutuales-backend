import { JsonController, Post, Body, Get } from 'routing-controllers';
import { getManager } from 'typeorm';
import { Cooperative } from '../persistence/entity/cooperative.entity';

@JsonController()
export class CooperativeController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(Cooperative);
  }

  @Get('/cooperatives/map')
  async getAllForMap() {
    const allCooperatives: Cooperative[] = await this.repository
      .createQueryBuilder('cooperative')
      .select(['cooperative.id', 'cooperative.name','cooperative.address', 'cooperative.latitude', 'cooperative.longitude', 'cooperative.type'])
      .getMany();

    return {
      success: true,
      coopertives: allCooperatives
    };
  }
}
