import React from 'react';
import styled from 'styled-components';
import { Like, Reply } from '../../static/svg';
import useShowModal from '../../lib/hooks/useShowModal';
import { WebToon } from '../../reducers/webtoons';
import { SERVER_ADDRESS } from '../../lib/utils';

interface ThumbnailProps {
  bgUrl: string;
}

const CardTemplate = styled.div`
  width: 283px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 283px;
  height: 283px;
  background-image: url(${(props: ThumbnailProps) => SERVER_ADDRESS + props.bgUrl});
`;

const StatusBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 283px;
  height: 52px;
  border: solid 1px '#e6e6e6';
  background-color: #ffffff;
`;

const StatusBarItem = styled.div`
  display: flex;
  align-items: center;
`;

const StatusBarText = styled.p`
  font-size: 12px;
  color: '#767676';
  margin-left: 5px;
  margin-right: 5px;
`;

const Title = styled.p`
  font-size: 36px;
  font-family: 'Nanum Pen Script';
  color: white;
`;

const Devider = styled.div`
  width: 60px;
  height: 2px;
  background-color: white;
`;

const Synopsis = styled.p`
  width: 122px;
  text-align: center;
  font-size: 11px;
  color: white;
`;

const Authorname = styled.p`
  color: white;
  font-size: 11px;
`;

interface WebToonCardProps {
  webtoon: WebToon;
}

const WebToonCard = ({ webtoon }: WebToonCardProps) => {
  const showModal = useShowModal();
  return (
    <CardTemplate onClick={() => showModal()}>
      <Thumbnail bgUrl={webtoon.thumbnailStory}>
        <Title>{webtoon.title}</Title>
        <Devider />
        {/** Need Synopsis Data */}
        <Synopsis>시놉시스 데이터</Synopsis>
        <Authorname>
          {webtoon.author.name}
          {' '}
          작가
        </Authorname>
      </Thumbnail>
      <StatusBar>
        <StatusBarItem>
          <Like />
          <StatusBarText>{webtoon.like}</StatusBarText>
        </StatusBarItem>
        <StatusBarItem>
          <Reply />
          {/* Need Reply Data */}
          <StatusBarText>999+</StatusBarText>
        </StatusBarItem>
      </StatusBar>
    </CardTemplate>
  );
};

export default WebToonCard;
