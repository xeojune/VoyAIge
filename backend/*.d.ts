declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'; // Optional specific values
      OPENAI_API_KEY: string; // Required string
      PORT?: string; // Optional string
      DATABASE_URL?: string; // Optional string
    }
  }
  