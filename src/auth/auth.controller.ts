import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/signin')
  // @UseGuards(AuthGuard('local'))
  async signin(@Request() req) {
    const value = await this.authService.generateToken({
      userId: req.user.id,
      email: req.user.email,
    });

    const data = {
      accessToken: value,
      userId: req.user.id,
    };
    return data;
  }

  @Post('/signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const dataSignup = await this.userService.create(createUserDto);
    const value = await this.authService.generateToken({
      userId: dataSignup.id,
      email: dataSignup.email,
    });

    const data = {
      accessToken: value,
      userId: dataSignup.id,
    };
    return data;
  }
}
