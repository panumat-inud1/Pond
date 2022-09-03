import { error } from '@sveltejs/kit';
import axios from 'axios';
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  let response = await axios.get('https://lotto.api.rayriffy.com/latest',{timeout: 9000});
  // @ts-ignore
  return new Response(JSON.stringify(response.data.response), { headers: { 'Content-Type': 'application/json' } })
}