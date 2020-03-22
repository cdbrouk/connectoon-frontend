import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

export default () => {
  const webtoons = useSelector((store: RootState) => store.webtoons);
  return webtoons;
};
