import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { offModal } from '../../reducers/styles';

export default () => {
  const dispatch = useDispatch();
  return useCallback(() => dispatch(offModal()), [dispatch]);
};
