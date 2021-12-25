import { Controller, Get, Inject, Logger } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { curry, test } from 'ramda'
import { EnvForDatabase } from './env'

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name)

  constructor (@Inject(EnvForDatabase.KEY) private readonly databaseEnv: ConfigType<typeof EnvForDatabase>) {

  }

  @Get()
  public greeting (): string {
    this.logger.debug({
      env: this.databaseEnv
    })
    curry(test)(/Bobo/)
    return 'Hello, World!'
  }
}
