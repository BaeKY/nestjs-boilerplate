import { ConfigFactory, ConfigModuleOptions, ConfigObject } from '@nestjs/config'
import path from 'path'
import Joi from 'joi'

interface ConfigOptionCreateParam {
  configEnvList: Array<ConfigFactory<ConfigObject>>
  joiSchema: Joi.Schema
}

export const configOptionCreate = (
  props: ConfigOptionCreateParam
): ConfigModuleOptions => {
  const { configEnvList, joiSchema } = props
  const validationOptions: Joi.ValidationOptions = {
    abortEarly: false,
    presence: 'required'
  }

  return {
    ignoreEnvFile: ['production', 'prod'].includes(process.env.NODE_ENV ?? ''),
    envFilePath: [path.resolve(process.cwd(), '.env.dev')],
    load: configEnvList,
    validationSchema: joiSchema,
    validationOptions
  }
}

export class Const<T> {
  constructor (public readonly value: T) {}

  map<T1>(f: (y: T) => T1): Const<T1> {
    return new Const<T1>(f(this.value))
  }
}
