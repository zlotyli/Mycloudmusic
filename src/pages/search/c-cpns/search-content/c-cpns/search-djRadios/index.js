import React, { memo } from 'react'
import { DjRadiosWrapper,RadioItem  } from './style'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function WYSearchDjradios(props) {
  const { result } = props;
  return (
    <DjRadiosWrapper>
      <div className="header">
        <h2>声音主播</h2>
      </div>
      <div className="radios">
      {
        result.map((radio,index)=>{
          return (
            <RadioItem key={radio.id} gender={radio.dj.gender}>
              <img src={getSizeImage(radio.picUrl,200)} alt=""/>
              <div className="radio-name text-nowrap">{radio.name}</div>
              <div className="origin">
                by&nbsp;
                <span className="dj-name">{radio.dj.nickname}</span>
                <i></i>
                <i className='gender sprite_icon2'></i>
              </div>
            </RadioItem>
          )
        })
      }
      </div>
      
    </DjRadiosWrapper>
  )
})
