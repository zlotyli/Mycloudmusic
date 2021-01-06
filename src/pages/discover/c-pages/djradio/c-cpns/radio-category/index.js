import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { 
  CategoryWrapper,
  CategoryContent,
  CategoryItemImage
} from './style';
import {
  getRadioCategoriesAction,
  changeCurrentIdAction
} from "../../store/actionCreators";


export default memo(function WYRadioCategory() {
  // state props
  // redux hooks
  const dispatch = useDispatch();
  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(["djradio", "categories"]),//得到分类的数据
    currentId: state.getIn(["djradio", "currentId"])//当前分类的id
  }), shallowEqual);
  // other hooks
  useEffect(() => {
    dispatch(getRadioCategoriesAction());//使得分类有数据,并将第一个分类的id设置为当前id
  }, [dispatch]);
  // other handle

  return (
    <CategoryWrapper>
      <CategoryContent>       
        <div className="category-page">
          {
            categories.map((item, indey) => {
              return (
                <div key={item.id} 
                      onClick={e => dispatch(changeCurrentIdAction(item.id))}
                      className={`category-item ${currentId === item.id?'active':''}`}>
                  <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                  <em>{item.name}</em>
                </div>
              )
            })
          }
        </div>
      </CategoryContent>
    </CategoryWrapper>
  )
})
