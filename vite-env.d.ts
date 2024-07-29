// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly BASE_URL: string
  readonly API_BASE_URL: string
  // Add other env variables you're using
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}