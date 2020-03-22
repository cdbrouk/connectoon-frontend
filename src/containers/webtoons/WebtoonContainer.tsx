import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setWebtoons } from '../../reducers/webtoons';
import { GRAPHQL_ADDRESS } from '../../lib/utils';
import WebToonList from '../../components/webtoon/WebToonList';
import { RootState } from '../../reducers';
import { finishedFetch, fetchWebtoons } from '../../reducers/searchForm';

const WebtoonContainer = () => {
  // Effect 부분 hooks로 별도 관리 필요
  const dispatch = useDispatch();
  const searchForm = useSelector((store: RootState) => store.searchForm);

  /** Initialize */
  useEffect(() => {
    dispatch(fetchWebtoons());
  }, [dispatch]);

  useEffect(() => {
    if (!searchForm.loading) return;
    const axiosWebtoon = async () => {
      const response = await axios({
        url: GRAPHQL_ADDRESS,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          query: `
            {
              webtoons(${searchForm.category}:"${searchForm.chip}") {
                id
                title
                author {
                  name
                  title
                  career
                  address
                  age
                }   
                story
                style
                thumbnailStory
                thumbnailStyle
                like
                createDate
                genre            
              }
            }
          `,
        },
      });
      dispatch(setWebtoons(response.data.data.webtoons));
      dispatch(finishedFetch());
    };
    axiosWebtoon();
  }, [dispatch, searchForm]);

  /** Loading Component */
  if (searchForm.loading) return <></>;

  return <WebToonList />;
};

export default WebtoonContainer;
