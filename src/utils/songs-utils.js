export const getOtherSongObj = function(songs){
  const id = songs.id;
  const name = songs.name;
  const dt = songs.dt;
  const ar = [songs.ar[0]];
  const obj = {id,name,dt,ar};
  return obj;
}