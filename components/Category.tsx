import React from 'react';
import Title from './Title';

function Category() {
  return (
    <>
      <Title title="콘텐츠 카테고리" alignCenter={true} />
      <Title title="최소 3개 이상 선택해 주세요." alignCenter={true} />
    </>
  );
}

export default Category;
