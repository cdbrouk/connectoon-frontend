import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setWebtoons } from '../../reducers/webtoons';
import { GRAPHQL_ADDRESS } from '../../lib/utils';
import WebToonList from '../../components/webtoon/WebToonList';

const WebtoonContainer = () => {
  // Effect 부분 hooks로 별도 관리 필요
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!loading) return;
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
              webtoons {
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
      setLoading(false);
    };
    axiosWebtoon();
  }, [loading, dispatch]);
  return <WebToonList />;
};

export default WebtoonContainer;
