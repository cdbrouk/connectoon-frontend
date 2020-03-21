import React from 'react';
import styled from 'styled-components';


const ModalBackGround = styled.div`
  display: flex;
  padding-top: 297px;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const ModalTemplate = styled.div`
  width: 1200px;
  height: 400px;
  background-color: white;
`;

const ModalComponent = () => {
  return (<ModalBackGround><ModalTemplate /></ModalBackGround>);
};

export default ModalComponent;