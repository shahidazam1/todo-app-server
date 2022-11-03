import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private prismaService: PrismaService) {}
  create(createTodoDto: CreateTodoDto, req) {
    return this.prismaService.todos.create({
      data: { ...createTodoDto, authorId: req.user.userId },
    });
  }

  findAll(req) {
    return this.prismaService.todos.findMany({
      where: { authorId: req.user.userId },
    });
  }

  findOne(id: number, req) {
    return this.prismaService.todos.findUnique({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto, req) {
    return this.prismaService.todos.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  remove(id: number, req) {
    return this.prismaService.todos.delete({ where: { id } });
  }
}
