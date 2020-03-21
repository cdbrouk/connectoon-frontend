import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ModalComponent from '../modal/ModalComponent';
import {RootState} from '../../reducers';

interface MainTemplateProps {
  children: React.ReactNode;
}

const Block = styled.div`
`;

const Inner = styled.div`
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const MainTemplate = ({ children }: MainTemplateProps) => {
  const styles = useSelector((store: RootState) => store.styles);
  return (
    <Block>
      {styles.modal && <ModalComponent />}
      <Inner>{children}</Inner>
    </Block>
  );
};

export default MainTemplate;
