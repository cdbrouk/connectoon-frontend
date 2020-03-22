import React from 'react';
import styled from 'styled-components';
import { Thumbnail as thumbnail } from '../../static/images';
import { Like, Reply } from '../../static/svg';
import useShowModal from '../../lib/hooks/useShowModal';

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
  background-image: url(${thumbnail});
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
  font-size: 11px;
  color: white;
`;

const Authorname = styled.p`
  color: white;
  font-size: 11px;
`;

interface WebToonCardProps {
  title: string;
  authorname: string;
  synopsis: string;
  like: number;
  replys: number;
}

const WebToonCard = ({
  title,
  authorname,
  synopsis,
  like,
  replys,
}: WebToonCardProps) => {
  const showModal = useShowModal();
  return (
    <CardTemplate onClick={()=>showModal()}>
      <Thumbnail>
        <Title>{title}</Title>
        <Devider />
        <Synopsis>{synopsis}</Synopsis>
        <Authorname>
          {authorname}
          {' '}
          작가
        </Authorname>
      </Thumbnail>
      <StatusBar>
        <StatusBarItem>
          <Like />
          <StatusBarText>{like}</StatusBarText>
        </StatusBarItem>
        <StatusBarItem>
          <Reply />
          <StatusBarText>{replys}</StatusBarText>
        </StatusBarItem>
      </StatusBar>
    </CardTemplate>
  );
};

export default WebToonCard;
