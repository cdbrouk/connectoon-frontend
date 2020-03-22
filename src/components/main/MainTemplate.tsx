import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import useOffModal from '../../lib/hooks/useOffModal';
import ModalContainer from '../../containers/webtoon/ModalContainer';

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
  const styles = useSelector((store: RootState) => store.styles);
  const offModal = useOffModal();
  const onClick = () => {
    if (!styles.modal) return;
    offModal();
  };
  return (
    <Block onClick={() => onClick()}>
      {styles.modal && <ModalContainer />}
      <Inner>{children}</Inner>
    </Block>
  );
};

export default MainTemplate;
