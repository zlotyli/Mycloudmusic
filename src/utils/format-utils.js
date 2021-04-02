
// 封装处理大数据的方法
export function getCount(count){
  if(count<0) return;
  if(count<10000){
    return count;
  }else if(Math.floor(count / 10000) < 10000){
    return Math.floor(count / 1000) / 10 + '万'; 
  }else{
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}
export function getmCount(count){
  if(count<0) return;
  if(count<100000){
    return count;
  }else if(Math.floor(count / 100000) < 100000){
    return Math.floor(count / 1000) / 10 + '万'; 
  }else{
    return Math.floor(count / 10000000) / 10 + '亿';
  }
}

// 封装小图片的函数
export function getSizeImage(imgUrl,size){
  if(imgUrl){
    return `${imgUrl}?param=${size}x${size}`;
  }
  if(imgUrl === `luxueyang`){
    return imgUrl;
  }
}
// 封装mv封面图片 
export function getMoreSizeImage(imgUrl,xsize,ysize){
  if(imgUrl){
    return `${imgUrl}?param=${xsize}y${ysize}`;
  }
}
// 封装的一时间转换函数
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'Y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
// 转换为年月日
export function formatYearDay(time) {
  return '20'+formatDate(time, "YY年MM月dd日");
}
// 转化为月份日期
export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}
// 转化为几时几刻
export function formatHourMinute(time) {
  return formatDate(time, 'hh:mm');
}
// 转化为播放时长
export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

// 通过id拼接上http等得到歌曲播放用到的src
export function getPlaySong(id){
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
