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
      cooperatives: allCooperatives
    };
  }

  @Post('/cooperatives')
  async getAll(@Body() request: any) {

     // Added base filter
     const filter = {
      name: '%',
      address: '%'
    };

    // Create a Paginated query to return all the users
    const allCooperatives: [Cooperative] = await this.repository
      .createQueryBuilder('cooperative')
      .select(['cooperative.id', 'cooperative.name','cooperative.address','cooperative.type'])
      .skip(request.offset)
      .take(request.limit)
      .where('cooperative.name like :name and cooperative.address like :address', filter)
      .getMany();


      // Count how many records match
    const cooperativesSize: any = await this.repository
    .createQueryBuilder('cooperative')
    .select('COUNT(cooperative.id)', 'count')
    .where('cooperative.name like :name and cooperative.address like :address', filter)
    .getRawOne();

  return {
    success: true,
    cooperatives: allCooperatives,
    totalElements: cooperativesSize.count
  };

  }
}
