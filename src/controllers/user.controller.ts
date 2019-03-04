import { Param, Body, Get, Post, Put, Delete, JsonController } from 'routing-controllers';
import { getManager } from 'typeorm';
import { User } from '../persistence/entity/user.entity';
import bcrypt = require('bcrypt');

@JsonController()
export class UserController {
  repository: any;
  constructor() {
    this.repository = getManager().getRepository(User);
  }
  @Get('/users')
  async getAll(@Body() request: any) {
    // Added base filter
    const filter = {
      firstName: '%',
      lastName: '%',
      email: '%'
    };
    
    // Change filter values if we have them in the request
    // TODO:: must find a way to improve this
    if (request.firstName) {
      filter.firstName = '%' + request.firstName + '%';
    }
    if (request.lastName) {
      filter.lastName = '%' + request.lastName + '%';
    }

    if (request.email) {
      filter.email = '%' + request.email + '%';
    }

    // Create a Paginated query to return all the users
    const allUsers: [User] = await this.repository
      .createQueryBuilder('user')
      .select(['user.id', 'user.firstName', 'user.lastName', 'user.email', 'user.enabled'])
      .skip(request.limit)
      .take(request.offset)
      .where('user.email like :email and user.firstName like :firstName and user.lastName like :lastName', filter)
      .getMany();

    return {
      success: true,
      users: allUsers
    };
  }

  @Get('/users/:id')
  async getOne(@Param('id') id: number) {
    try {
      const findedUser: User = await this.repository.findOneOrFail(id);

      //remove password
      delete findedUser.password;

      return {
        success: true,
        user: findedUser
      };
    } catch (error) {
      return {
        success: false,
        message: error
      };
    }
  }

  @Post('/users/create')
  async post(@Body() request: any) {
    const newUser = {
      ...request,
      enabled: false,
      password: bcrypt.hashSync(request.password, 10)
    };
    try {
      const userToSave: User = await this.repository.save(newUser);
      return {
        sucess: true,
        id: userToSave.id,
        message: 'User Created'
      };
    } catch (error) {
      return {
        success: false,
        message: error
      };
    }
  }

  @Post('/users/login')
  async login(@Body() request: any) {
    const userToFind = await this.repository
      .createQueryBuilder('user')
      .select(['user.id', 'user.firstName', 'user.lastName', 'user.email', 'user.enabled', 'user.password'])
      .where('user.email = :email and enabled = true', { email: request.email })
      .getOne();

    // If user doesn't exist just return a message
    if (!userToFind) {
      return {
        sucess: false,
        message: 'Invalid user or password'
      };
    }

    // Validate password
    if (bcrypt.compareSync(request.password, userToFind.password)) {
      delete userToFind.password;
      return {
        success: true,
        data: userToFind
      };
    } else {
      return {
        success: false,
        message: 'Invalid user or password'
      };
    }
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    const currentUser: User = this.repository.findOne(id);
    if (currentUser) {
      return this.repository.remove(currentUser);
    }
  }
}
