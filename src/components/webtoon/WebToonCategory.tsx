import React, { useState } from 'react';
import styled from 'styled-components';
import useSetSearchCategory from './hooks/useSetSearchCategory';
import WebToonChip from './WebToonChip';

interface CategoryItemProps {
  selected: boolean;
}

const Block = styled.div`
  height: 172px;
`;

const Inner = styled.div`
  width: 1200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;  
`;

const Category = styled.div`
  height: 77px;
`;

const CategoryItem = styled.div`
  display: flex;
  font-size: 18px;
  height: 77px;
  width: 84px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  text-align: center;
  border-bottom: ${(props: CategoryItemProps) => props.selected && '3px solid'};
  border-bottom-color: ${(props: CategoryItemProps) =>
    props.selected && '#43e39f'};
  font-weight: ${(props: CategoryItemProps) => props.selected && 'bold'};
  color: ${(props: CategoryItemProps) =>
    props.selected ? '#000000' : '#767676'};
  cursor: pointer;
`;

const ChipBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
  background-color: #e6e6e6;
`;

const WebToonCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('story');
  const setSearchCategory = useSetSearchCategory();

  const onClickCategory = (text: string) => {
    setSelectedCategory(text);
    setSearchCategory(text);
  };

  return (
    <Block>
      <Category>
        <Inner>
          <CategoryItem
            selected={selectedCategory === 'story'}
            onClick={() => onClickCategory('story')}
          >
            스토리
          </CategoryItem>
          <CategoryItem
            selected={selectedCategory === 'style'}
            onClick={() => onClickCategory('style')}
          >
            작화
          </CategoryItem>
        </Inner>
      </Category>
      <ChipBlock>
        <Inner>
          <WebToonChip item="전체보기" />
          <WebToonChip item="순정" />
          <WebToonChip item="일상" />
          <WebToonChip item="개그" />
          <WebToonChip item="판타지" />
          <WebToonChip item="액션" />
          <WebToonChip item="드라마" />
          <WebToonChip item="스릴러" />
          <WebToonChip item="시대극" />
          <WebToonChip item="스포츠" />
        </Inner>
      </ChipBlock>
    </Block>
  );
};

export default WebToonCategory;
