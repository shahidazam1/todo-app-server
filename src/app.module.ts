import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
