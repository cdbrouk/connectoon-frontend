import React from 'react';
import styled from 'styled-components';
import { Profile, ToonImg } from '../../static/images';

const ModalBackGround = styled.div`
  display: flex;
  padding-top: 297px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ModalTemplate = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const AuthorThumbnail = styled.img`
  width: 60;
  height: 60;
`;

const HeaderDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  color: #43e39f;
  font-weight: bold;
`;

const HeaderAuthorName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
`;

const HeaderDateGenre = styled.p`
  font-size: 12px;
  color: white; /* 잘 안보여서 흰색으로 설정함 */
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #43e39f;
  color: white;
  font-size: 16px;
  width: 200px;
  height: 56px;
  font-weight: bold;
  border-radius: 6px;
`;

const Rows = styled.div`
  display: flex;
  align-items: center;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  height: 100%;
`;

const Toon = styled.img`
  width: 1040px;
  height: 1600px;
`;

const ModalComponent = () => {
  return (
    <ModalBackGround>
      <ModalTemplate>
        <ModalHeader>
          <HeaderLeft>
            <AuthorThumbnail src={Profile} />
            <HeaderDetail>
              <HeaderTitle>치즈인더트랩</HeaderTitle>
              <Rows>
                <HeaderAuthorName>망난희</HeaderAuthorName>
                <HeaderDateGenre>2020.01.05 로맨스 | 스릴러</HeaderDateGenre>
              </Rows>
            </HeaderDetail>
          </HeaderLeft>
          <HeaderRight>문의하기</HeaderRight>
        </ModalHeader>
        <ModalBody>
          <Toon src={ToonImg} />
        </ModalBody>
      </ModalTemplate>
    </ModalBackGround>
  );
};

export default ModalComponent;
