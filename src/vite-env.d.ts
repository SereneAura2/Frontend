/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_DEV: string;
  readonly VITE_API_URL_PROD: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 