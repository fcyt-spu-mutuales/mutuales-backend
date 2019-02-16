import {
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete,
    JsonController
  } from "routing-controllers";
  import { getManager } from "typeorm";
  import { User } from "../persistence/entity/user.entity";
  import bcrypt = require('bcrypt');


  @JsonController()
  export class UserController {
    repository: any;
    constructor() {
      this.repository = getManager().getRepository(User);
    }
    @Get("/users")
    getAll() {
      return this.repository.find();
    }
  
    @Get("/users/:id")
    getOne(@Param("id") id: number) {
      return this.repository.findOne(id);
    }
  
    @Post("/users/create")
    async post(@Body() request: any) {
    
      const newUser = {
        ...request,
        password: bcrypt.hashSync(request.password, 10)
      };
    
      const userToSave: User = await this.repository.create(newUser)
      return this.repository.save(userToSave)
    }
  
    @Post("/users/login")
    async login(@Body() request: any) {

      const userToFind = await this.repository.createQueryBuilder("user")
                                              .where("user.email = :email", {email: request.email})
                                              .getOne();
      
      // If user doesn't exist just return a message 
      if(!userToFind) {
        return {
          sucess: false,
          message: "Invalid user or password"
        }
      }

      // Validate password
      if (bcrypt.compareSync(request.password, userToFind.password)) {
          return {
            id: userToFind.id,
            firstName: userToFind.firstName,
            lastName: userToFind.lastName,
            success: true
          }
      } else {
        return {
          success: false,
          message: "Invalid user or password"
        }
      }
    }
  
    @Delete("/users/:id")
    remove(@Param("id") id: number) {
      const currentUser: User = this.repository.findOne(id);
      if (currentUser) {
        return this.repository.remove(currentUser);
      }
    }
  }