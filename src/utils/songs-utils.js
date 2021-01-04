// 榜单页中将对象中的id、name、dt...分离出来
export const getOtherSongObj = function(songs){
  const id = songs.id;
  const name = songs.name;
  const dt = songs.dt;
  const ar = [songs.ar[0]];
  const obj = {id,name,dt,ar};
  return obj;
}