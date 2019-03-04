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
  async getAll() {
    const allUsers: [User] = await this.repository.find();
    const usersWithoutPassword = allUsers.map(user => {
      delete user.password
      return user
    })
    return {
      success: true,
      users: usersWithoutPassword
    }
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
      delete userToFind.password
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
