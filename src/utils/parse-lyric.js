/* 
[00:00.000] 作词 : 许嵩
[00:01.000] 作曲 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去
[00:43.340]请你少买冰淇淋
[00:45.680]天凉就别穿短裙
[00:47.830]别再那么淘气
[00:50.060]如果有时不那么开心
[00:52.470]我愿意将格洛米借给你
[00:55.020]你其实明白我心意
 */

// 解析歌词
//定义一解析用正则表达式---解析出时间
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString){
  const lineStrings = lyricString.split("\n");//先切分每一行的歌词--其中有可能存在空行
  const lyric = [];//存储最终的歌词
  for (let line of lineStrings){//line为‘[00:55.020]你其实明白我心意’---注意第三个有可能是二或三位数
    if(line){
      const result = parseExp.exec(line);//result = ['00:00:00','00','00','00',...]
      if(!result) continue;//如果这行没有匹配到，继续循匹配下一行；
      //解析出时间,并转换成时间整数
      const time1=result[1] * 60 * 1000;//对应时间片段一并转移成毫秒--000
      const time2=result[2] * 1000;//对应时间片段二并转移成毫秒-000
      const time3=result[3].length === 3 ? result[3]*1 : result[3]*10;//对应时间片段三并转移成毫秒
      const time = time1+time2+time3;//将时间合并
      // 解析出内容
      const content = line.replace(parseExp,'').trim();//将时间剔除就行
      // 导出解析后的结果
      const lineObj = {time,content};//结果如此：{time: 135326, content: "夏天快要过去"}

      lyric.push(lineObj);
    }
  }
  return lyric;
}

// 滚动歌词
export function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}