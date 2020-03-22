import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { selectWebtoon } from '../../../reducers/webtoons';

export default () => {
  const dispatch = useDispatch();
  return useCallback(webtoon => dispatch(selectWebtoon(webtoon)), [dispatch]);
};
