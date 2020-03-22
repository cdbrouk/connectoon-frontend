import { useCallback } from 'react';
import {useDispatch} from 'react-redux';
import { setSearchChip } from '../../../reducers/searchForm';

export default () => {
  const dispatch = useDispatch();
  return useCallback(chip => dispatch(setSearchChip(chip)), [dispatch]);
};