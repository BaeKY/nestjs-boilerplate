declare namespace NodeJS {
  interface Process {
    /** running on server */
    isServer: boolean
  }
  interface ProcessEnv {
    /** node environment */
    NODE_ENV: 'production' | 'develop' | 'local'
    /**
     * URL
     */
    DATABASE_HOST: string
    DATABASE_PORT: string
  }
}

export declare module Event {
  export type Test = string
}
