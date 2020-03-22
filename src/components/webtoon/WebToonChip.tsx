import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import useSetSearchChip from './hooks/useSetSearchChip';

interface ChipProps {
  selected?: boolean;
}

export interface WebToonChipProps {
  item: string;
}

const Chip = styled.div`
  display: flex;
  background-color: ${(props: ChipProps) => props.selected ? '#43e39f' :'white'};
  color: ${(props: ChipProps) => props.selected ? 'white' : '#767676'};
  width: 98px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  margin-right: 24px;
  font-size: 14px;
  cursor: pointer;
`;

const WebToonChip = ({item}: WebToonChipProps ) => {
  const searchForm = useSelector((store: RootState) => store.searchForm);
  const setSearchChip = useSetSearchChip();

  const onClickChip = (chip: string) => {
    setSearchChip(chip);
  };

  return <Chip selected={item === searchForm.chip} onClick={() => onClickChip(item)}>{item}</Chip>;
};

export default WebToonChip;

