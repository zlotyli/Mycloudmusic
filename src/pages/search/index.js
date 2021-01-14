import React, { memo } from 'react';
import { SearchWrapper } from './style';
import WYSearchHeader from './c-cpns/search-header';
import WYSearchContent from './c-cpns/search-content'
export default memo(function WYSearch() {
  
  return (
    <SearchWrapper className="wrap-v2">
      <div className="content">
        <WYSearchHeader/>
        <WYSearchContent/>
      </div>
    </SearchWrapper>
  )
})
