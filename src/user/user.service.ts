import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { SignupDto } from 'src/dto/signup.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(signupDto: SignupDto): Promise<User> {
    const newUser = new this.userModel(signupDto);
    return await newUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }
 

  async findByResetCode(resetCode: string): Promise<User | undefined> {
    return this.userModel.findOne({ resetCode }).exec();
  }

  async findUserById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async updateUser(id: string, userDto: any): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
