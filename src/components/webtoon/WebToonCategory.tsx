import React, { useState } from 'react';
import styled from 'styled-components';

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

const Chips = styled.div`
  height: 95px;
  background-color: #e6e6e6;
`;

const WebToonCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('story');
  return (
    <Block>
      <Category>
        <Inner>
          <CategoryItem
            selected={selectedCategory === 'story'}
            onClick={() => setSelectedCategory('story')}
          >
            스토리
          </CategoryItem>
          <CategoryItem
            selected={selectedCategory === 'style'}
            onClick={() => setSelectedCategory('style')}
          >
            작화
          </CategoryItem>
        </Inner>
      </Category>
      <Chips />
    </Block>
  );
};

export default WebToonCategory;
