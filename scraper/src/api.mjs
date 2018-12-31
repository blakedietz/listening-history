import fetch from 'node-fetch';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

export const fetchUserListeningHistory = async ({limit=200, user, page=1, from, extended = 0, to, apiKey}) => {
  const results = await fetch(`${BASE_URL}?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&page=${page}&format=json`);
  const json = await results.json();
  console.log(JSON.stringify(json, null, 2));
  return json;
};
