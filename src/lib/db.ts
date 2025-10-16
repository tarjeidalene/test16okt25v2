import { createClient } from "@libsql/client";

export const db = createClient({
  url: import.meta.env.ASTRO_DB_REMOTE_URL,
  authToken: import.meta.env.ASTRO_DB_APP_TOKEN,
});
