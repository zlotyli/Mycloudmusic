// 优秀新电台
import React, { memo,useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual} from 'react-redux'
import { ExcellentWrapper } from './style'
// 导入异步actions
import { getRadioRecommendAction } from '../../store/actionCreators'
// 导入公共组价
import WYThemeHeaderCommon from '@/components/theme-header-radio';
import WYRadioExcellentCover from '@/components/radio-excellent-cover';
export default memo(function WYRadioExcellent() {
  // redux hooks
  const { currentId, recommends } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    recommends: state.getIn(["djradio", "recommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommendAction(currentId));//派发得到优秀电台的数据
  }, [dispatch, currentId])
  return (
    <ExcellentWrapper>
      <WYThemeHeaderCommon title='优秀新电台'/>
      <div className="radio-list">
        {
          recommends.slice(0,5).map((item,index) => {
            return (<WYRadioExcellentCover info={item} key={item.id}/>)
          })
        }
      </div>
    </ExcellentWrapper>
  )
})
