import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { App } from 'app.module'

export const bootstrap = async (): Promise<void> => {
  // empty
  const app = await NestFactory.create(App, new FastifyAdapter())

  const port = 5050
  app.listen(`0.0.0.0:${port}`)
    .then(() => console.log(`Server listening at ${port}`))
    .catch((err) => console.error(err))
}

bootstrap()
  .then(() => console.log('Server Started Successfully'))
  .catch((err) => { console.error(err) })
