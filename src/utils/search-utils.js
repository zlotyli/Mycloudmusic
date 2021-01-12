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