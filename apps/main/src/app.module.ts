import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { configOptionCreate } from '@baeky-nestjs-lib/common'
import { EnvForDatabase } from './env'
import Joi from 'joi'

@Module({
  imports: [ConfigModule.forRoot(
    configOptionCreate({
      configEnvList: [
        EnvForDatabase
      ],
      joiSchema: Joi.object<NodeJS.ProcessEnv>({
        DATABASE_HOST: Joi.string().uri(),
        DATABASE_PORT: Joi.number().min(0).max(65536),
        NODE_ENV: Joi.string().valid('prod', 'dev')
      })
    })
  )],
  controllers: [AppController]
})
export class App {}
