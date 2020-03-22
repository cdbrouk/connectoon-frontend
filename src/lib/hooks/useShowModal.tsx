import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { onModal } from '../../reducers/styles';

export default () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(onModal()), [dispatch]);
};
