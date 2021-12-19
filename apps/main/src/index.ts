import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { App } from './app.module'

export const bootstrap = async (): Promise<void> => {
  // empty
  const app = await NestFactory.create<NestFastifyApplication>(App, new FastifyAdapter())

  const port = 5050
  app.listen(port, '0.0.0.0')
    .then(() => console.log(`Server listening at ${port}`))
    .catch((err) => console.error(err))
}

bootstrap()
  .then(() => console.log('Server Started Successfully'))
  .catch((err) => { console.error(err) })
