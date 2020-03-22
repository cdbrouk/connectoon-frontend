import React from 'react';
import styled from 'styled-components';
import WebToonCategory from '../components/webtoon/WebToonCategory';
import WebtoonContainer from '../containers/webtoons/WebtoonContainer';

const Block = styled.div``;

const WebToonPage = () => {
  return (
    <Block>
      <WebToonCategory />
      <WebtoonContainer />
    </Block>
  );
};

export default WebToonPage;
