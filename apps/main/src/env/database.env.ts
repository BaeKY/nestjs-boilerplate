import { registerAs } from '@nestjs/config'

export interface Database {
  host: string
  port: number
}

export const EnvForDatabase = registerAs<Database>('database', () => ({
  host: process.env.DATABASE_HOST ?? '',
  port: Number(process.env.DATABASE_PORT ?? 5432)
}))
