import { JsonController, Post, Body, Get, Param } from 'routing-controllers';
import { getManager } from 'typeorm';
import { Mutual } from '../persistence/entity/mutual.entity';

@JsonController()
export class MutualController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(Mutual);
  }

  @Get('/mutuales/:id')
  async getOne(@Param('id') id: number) {
    const mutual: Mutual = this.repository
      .createQueryBuilder('mutual')
      .where('mutual.id = :id', id)
      .getOne();

    if (mutual) {
      return {
        success: true,
        mutual: mutual
      };
    } else {
      return {
        success: false,
        message: 'Mutual no encontrada'
      };
    }
  }

  @Get('/mutuales/map')
  async getAllForMap() {
    const mutuales: Mutual[] = await this.repository
      .createQueryBuilder('mutual')
      .select([
        'mutual.id',
        'mutual.nombre',
        'mutual.direccion',
        'mutual.latitud',
        'mutual.longitud',
        'mutual.tipo'
      ])
      .getMany();

    return {
      success: true,
      mutuales: mutuales
    };
  }

  @Post('/mutuales')
  async listado(@Body() request: any) {
    // Added base filter
    const filter = {
      nombre: '%',
      direccion: '%'
    };

    // Create a Paginated query to return all the users
    const mutuales: [Mutual] = await this.repository
      .createQueryBuilder('mutual')
      .select(['mutual.id', 'mutual.nombre', 'mutual.direccion', 'cooperative.tipo'])
      .skip(request.offset)
      .take(request.limit)
      .where('mutual.nombre like :nombre and mutual.direccion like :direccion', filter)
      .getMany();

    // Count how many records match
    const cantidad: any = await this.repository
      .createQueryBuilder('mutual')
      .select('COUNT(mutual.id)', 'count')
      .where('mutual.nombre like :nombre and mutual.direccion like :direccion', filter)
      .getRawOne();

    return {
      success: true,
      mutuales: mutuales,
      cantidad: cantidad.count
    };
  }
}
