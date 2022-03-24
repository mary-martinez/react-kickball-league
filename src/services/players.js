import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select('*, teams(*)');
  return checkError(resp);
}
export async function fetchTeamPlayers(team_id) {
  const resp = await client.from('players').select('*').match({ team_id });
  // console.log(resp);
  return checkError(resp);
}