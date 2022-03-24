import { checkError, client } from './client';

export async function fetchTeams() {
  const resp = await client.from('teams').select('*');
  return checkError(resp);
}

export async function fetchTeamById(id) {
  const resp = await client.from('teams').select('*, players(*)').match({ id }).single();
  // console.log('thats so fetch');
  return checkError(resp);
}