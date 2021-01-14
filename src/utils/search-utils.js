// 搜索框中的命名改变
export function nameChange(arrName){
 switch(arrName){
   case 'songs':
     return '单曲'
    case 'albums':
      return '专辑'
    case'artists':
      return '歌手'
    default:
      return '歌单'
 }
}
// 将搜索结果中进行统一对象处理
export function objChange(res){
  const obj = {};
  if(res.result){
    if(res.result.songs&&res.result.hasMore !== undefined){//单曲
      obj.result = res.result.songs;
      obj.type=1;
      obj.name='songs';
      obj.total = res.result.songCount;
    }else if(res.result.artists){ //歌手
      obj.result = res.result.artists;
      obj.type=100;
      obj.name='artists';
      obj.total = res.result.artistCount;
    }else if(res.result.albums){//专辑
      obj.result = res.result.albums;
      obj.type = 10;
      obj.name = 'albums';
      obj.total = res.result.albumCount;
    }else if(res.result.videos){//视频
      obj.result = res.result.videos
      obj.type = 1014;
      obj.name = 'videos';
      obj.total = res.result.videoCount;
    }
    else if(res.result.playlists){//歌单
      obj.result = res.result.playlists;
      obj.type = 1000;
      obj.name='playlists';
      obj.total = res.result.playlistCount;
    }else if(res.result.djRadios){//主播电台
      obj.result = res.result.djRadios;
      obj.type=1009;
      obj.name='djRadios';
      obj.total = res.result.djRadiosCount;
    }else if(res.result.userprofiles){//用户
      obj.result = res.result.userprofiles;
      obj.type = 1002;
      obj.name='userprofiles';
      obj.total=res.result.userprofileCount;
    }else{//歌词
      obj.result = res.result.songs;
      obj.type = 1006;
      obj.name = 'lyrics';
      obj.total = res.result.songCount;
    }
  }
  return obj;
}