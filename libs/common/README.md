# config-option-create

## `configOptionCreate`

- 다음과 같이 사용한다

```Typescript

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { configOptionCreate } from '@baeky-nestjs-lib/common'
import { EnvDB } from './env'

@Module({
  imports: [ConfigModule.forRoot(
    configOptionCreate([
      EnvDB
    ])
  )]
})
export class App {}

```

### `NODE_ENV`에 따라 개발환경 분기처리
- NODE_ENV는 다음과 같은 값을 가져야함
  - production
  - develop
- `NODE_ENV === production (또는 prod)` => OS의 환경변수를 사용함
- `NODE_ENV !== production (또는 prod)` => .env.dev 파일을 사용함(`process.cws()`에 위치시켜서 사용)