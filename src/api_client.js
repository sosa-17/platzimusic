const getArtist = async () => {
  let response = await fetch(
    'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=3911c712e398e2fd1117bf914f6470a4&format=json',
  );
  let json = await response.json();
  //console.log(json);
  return json;
};
export default getArtist;
