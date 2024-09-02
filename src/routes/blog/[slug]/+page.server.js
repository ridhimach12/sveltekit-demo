import { sql } from "@vercel/postgres";

export async function load({ locals }) {
  return {
    names: await sql`SELECT * from NAMES where user_id='${locals.user}'`
  }
}

