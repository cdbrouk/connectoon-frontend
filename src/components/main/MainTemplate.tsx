import React from 'react';
import styled from 'styled-components';

interface MainTemplateProps {
  children: React.ReactNode;
}

const Block = styled.div``;

const Inner = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <Block>
      <Inner>{children}</Inner>
    </Block>
  );
};

export default MainTemplate;
