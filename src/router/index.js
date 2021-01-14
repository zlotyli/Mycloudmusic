import React from 'react'
import { Redirect } from 'react-router-dom';
const WYDiscover = React.lazy(() => import('@/pages/discover'));
const WYFriend = React.lazy(()=>import('@/pages/friend'));
const WYMine = React.lazy(()=>import('@/pages/mine'));


// 导入discover的子路由
const WYRecommend = React.lazy(()=>import('@/pages/discover/c-pages/recommend'));
const WYSongs = React.lazy(()=>import('@/pages/discover/c-pages/songs'));
const WYRanking = React.lazy(()=>import('@/pages/discover/c-pages/ranking'));
const WYAlbum = React.lazy(()=>import('@/pages/discover/c-pages/album'));
const WYArtist = React.lazy(()=>import('@/pages/discover/c-pages/artist'));
const WYDjradio = React.lazy(()=>import('@/pages/discover/c-pages/djradio'));
const WYPlayer = React.lazy(()=>import('@/pages/player'));
const WYSearch = React.lazy(()=>import('@/pages/search'));

// 建立路由映射

const routes = [
  /* 为'/'时重定向到/discover/ 由于Redirect要依赖于React故需引入
    并且路由要为render()去渲染
  */
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: WYDiscover,
    routes: [
      {
        path:"/discover",
        exact:true,
        render: () => (
          <Redirect to={"/discover/recommend"}/>
        )
      },
      {
        path: "/discover/recommend",
        component: WYRecommend
      },
      {
        path: "/discover/ranking",
        component: WYRanking
      },
      {
        path: "/discover/songs",
        component: WYSongs
      },
      {
        path: "/discover/djradio",
        component: WYDjradio
      },
      {
        path: "/discover/artist",
        component: WYArtist
      },
      {
        path: "/discover/album",
        component: WYAlbum
      },
      {
        path: "/discover/player",
        component: WYPlayer
      },
      
    ]
  },
  {
    path: '/mine',
    component:WYMine,
  },
  {
    path: '/friend',
    component:WYFriend
  },
  {
    path: "/search",
    component: WYSearch
  }
  
];
export default routes