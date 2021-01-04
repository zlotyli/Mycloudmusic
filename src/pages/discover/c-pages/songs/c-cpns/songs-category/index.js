import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { CategoryWrapper } from './style';
import { changeCurrentCategoryAction,getSongsListAction } from '../../store/actionCreators'
export default memo(function WYSongsCategory(props) {
  // redux hook
  const dispatch = useDispatch();
  const {category} = useSelector(state => ({
    category: state.getIn(['songs','category']),//分类列表中的数据
  }),shallowEqual);

  // // other hooks
  // useEffect(()=>{
  //   dispatch(getCategoryAction());
  // },[dispatch])
  // other handle
  // 当点击对应的分类
  const selectCategory = (name)=>{
    // 1. 改变当前的分类名
    dispatch(changeCurrentCategoryAction(name));
    // 2. 改变当前分类名对应的歌单数据
    dispatch(getSongsListAction(0));
    props.setIsShow(false); 
  }
  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e=>selectCategory('全部')}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item,index)=>{
          return (
            <dl key={item.name} className={"item"+index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {
                  item.subs.map((iten,indey)=>{
                    return (
                      <div className="item" key={iten.name}>
                        <span className="link" onClick={e=>selectCategory(iten.name)}>{iten.name}</span>
                        <span className="divider">|</span>
                      </div>
                    )
                  })
                }
                
              </dd>
            </dl>
          )
        })}
      </div>
    </CategoryWrapper>
  )
})
