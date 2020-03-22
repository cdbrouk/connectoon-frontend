import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import useCallWebtoonReducer from './hooks/useCallWebtoonReducer';
import { callWebtoons } from '../../reducers/webtoons';
import { GRAPHQL_ADDRESS } from '../../lib/utils';
import WebToonList from '../../components/webtoon/WebToonList';

const WebtoonContainer = () => {
  const dispatch = useDispatch();
  const { loading, webtoons, selectedWebToon } = useCallWebtoonReducer();
  useEffect(() => {
    if (loading) return;
    dispatch(callWebtoons());
    const axiosWebtoon = async () => {
      const response = await axios({
        url: 'http://localhost:8000/graphql/',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          query: `
            {
              webtoons {
                id
              }
            }
          `
        }
      });
      console.log(response);
    };
    axiosWebtoon();
  }, [loading, dispatch]);
  return <WebToonList />;
};

export default WebtoonContainer;
