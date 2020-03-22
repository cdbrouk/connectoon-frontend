import React from 'react';
import styled from 'styled-components';
import WebToonCard from './WebToonCard';

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

  return (
    <Block>
      <Inner>
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}          
        />
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}
        />
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}
        />
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}
        />
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}
        />
        <WebToonCard
          title="치즈인더트랩"
          authorname="망난희"
          synopsis="평범한 대학생 홍설 평범하지 않은 유정을 만나 ... "
          like={100}
          replys={999}
        />
      </Inner>
    </Block>
  );
};

export default WebToonList;
