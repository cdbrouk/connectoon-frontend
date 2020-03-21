import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';

interface PageItemProps {
  selected: boolean;
}

const Block = styled.div``;

const Inner = styled.div`
  display: flex;
  width: 1200px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #43e39f;
`;

const Right = styled.div`
  display: flex;
  width: 482px;
  justify-content: space-between;
`;

const PageLink = styled(Link)`
  text-decoration: none;
`;

const LinkItem = styled.p`
  font-size: 14px;
  color: #767676;
  cursor: pointer;
  color: ${(props: PageItemProps) => (props.selected ? '#43e39f' : '#767676')};
`;

const MainHeader = ({ location: { pathname } }: RouteComponentProps) => {
  return (
    <Block>
      <Inner>
        <PageLink to="/">
          <Logo>커넥툰</Logo>
        </PageLink>
        <Right>
          <PageLink to="/webtoon">
            <LinkItem selected={pathname === '/' || pathname === '/webtoon'}>
              작품보기
            </LinkItem>
          </PageLink>
          <PageLink to="/author">
            <LinkItem selected={pathname === '/author'}>작가찾기</LinkItem>
          </PageLink>
          <PageLink to="/new">
            <LinkItem selected={pathname === '/new'}>탄생웹툰</LinkItem>
          </PageLink>
          <PageLink to="/login">
            <LinkItem selected={pathname === '/login'}>
              로그인/회원가입
            </LinkItem>
          </PageLink>
        </Right>
      </Inner>
    </Block>
  );
};

export default withRouter(MainHeader);
