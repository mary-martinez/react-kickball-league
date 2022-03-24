import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*, teams(*)');
  return checkError(resp);
}

export async function fetchPlayerById(id) {
  const resp = await client.from('players').select('*, teams(*)').match({ id }).single();
  return checkError(resp);
}
