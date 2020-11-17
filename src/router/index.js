import React from 'react'
import { Redirect } from 'react-router-dom';

import WYDiscover from '@/pages/discover';
import WYFriend from '@/pages/friend';
import WYMine from '@/pages/mine';

// 导入discover的子路由
import WYRecommend from '@/pages/discover/c-pages/recommend';
import WYSongs from '@/pages/discover/c-pages/songs';
import WYRanking from '@/pages/discover/c-pages/ranking';
import WYAlbum from '@/pages/discover/c-pages/album';
import WYArtist from '@/pages/discover/c-pages/artist';
import WYDjradio from '@/pages/discover/c-pages/djradio'
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
      }
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
];
export default routes