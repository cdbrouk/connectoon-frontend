import React from 'react';
import styled from 'styled-components';
import WebToonCard from './WebToonCard';
import useCallWebtoonReducer from '../../containers/webtoons/hooks/useCallWebtoonReducer';

const Block = styled.div``;

const Inner = styled.div`
  width: 1200px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const WebToonList = () => {
  const { webtoons } = useCallWebtoonReducer();
  return (
    <Block>
      <Inner>
        {webtoons &&
          webtoons.map(webtoon => (
            <WebToonCard webtoon={webtoon} key={webtoon.id} />
          ))}
      </Inner>
    </Block>
  );
};

export default WebToonList;
