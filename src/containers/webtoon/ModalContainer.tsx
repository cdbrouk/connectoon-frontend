import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../reducers';
import { GRAPHQL_ADDRESS } from '../../lib/utils';
import ModalComponent from '../../components/modal/ModalComponent';

const ModalContainer = () => {
  const webtoon = useSelector(
    (store: RootState) => store.webtoons.selectedWebToon
  );
  const [toonImg, setToonImg] = useState('');

  useEffect(() => {
    const axiosWebtoon = async () => {
      const response = await axios({
        url: GRAPHQL_ADDRESS,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          query: `{
            toons(search:"${webtoon?.title}") {
              image
              episode
            }
          }`,
        },
      });
      if (response.data.data.toons.length === 0) return;
      setToonImg(response.data.data.toons[0].image);
    };
    axiosWebtoon();
  }, [webtoon]);

  return <ModalComponent toonImg={toonImg} />;
};

export default ModalContainer;
