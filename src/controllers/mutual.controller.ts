import { JsonController, Post, Body, Get, Param } from 'routing-controllers';
import { getManager } from 'typeorm';
import { Mutual } from '../persistence/entity/mutual.entity';

@JsonController()
export class MutualController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(Mutual);
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

  @Get('/mutuales/:id')
  async getOne(@Param('id') id: number) {
    
    const filter = {
      id: id
    };

    const mutual: Mutual = await this.repository
      .createQueryBuilder('mutual')
      .where('mutual.id = :id', filter)
      .leftJoinAndSelect("mutual.asociados", "asociados")
      .leftJoinAndSelect("mutual.comunicacion", "comunicacion")
      .leftJoinAndSelect("mutual.localidad", "localidad")
      .leftJoinAndSelect("localidad.departamento", "departamento")
      .leftJoinAndSelect("mutual.directivo", "directivo")
      .leftJoinAndSelect("mutual.empleados", "empleados")
      .leftJoinAndSelect("mutual.instrumentos", "instrumentos")
      .leftJoinAndSelect("mutual.planes", "planes")
      .leftJoinAndSelect("mutual.economica", "economica")
      .leftJoinAndSelect("mutual.servicios", "servicos")
      .leftJoinAndSelect("mutual.necesidades", "necesidades")
      .leftJoinAndSelect("mutual.actividades", "actividad")
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
      .select(['mutual.id', 'mutual.nombre', 'mutual.direccion', 'mutual.tipo'])
      .leftJoinAndSelect("mutual.localidad", "localidad")
      .leftJoinAndSelect("localidad.departamento", "departamento")
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
