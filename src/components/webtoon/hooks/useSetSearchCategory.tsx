import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {setSearchCategory} from '../../../reducers/searchForm';

export default () => {
  const dispatch = useDispatch();
  return useCallback(category => dispatch(setSearchCategory(category)), [dispatch]);
};