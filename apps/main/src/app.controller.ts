import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  public greeting (): string {
    return 'Hello, World!'
  }
}
