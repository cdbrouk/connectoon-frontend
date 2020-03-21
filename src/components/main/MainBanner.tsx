import React from 'react';
import styled from 'styled-components';
import { banner } from '../../static/images';

const Block = styled.div``;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${banner});
`;

const Rows = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.p`
  font-size: 40px;
  color: white;
`;

const BannerBoldText = styled(BannerText)`
  font-weight: bold;
`;

const BannerCustomText = styled.p`
  font-size: 49px;
  font-family: 'Nanum Pen Script', cursive;
  color: #43e39f;
`;

const MainBanner = () => {
  return (
    <Block>
      <Banner>
        <Rows>
          <BannerText>웹툰작가를 연결하다.</BannerText>
          <BannerBoldText>커넥툰</BannerBoldText>
        </Rows>
        <Rows>
          <BannerCustomText>connect </BannerCustomText>
          <BannerCustomText style={{ color: 'white' }}> + </BannerCustomText>
          <BannerCustomText>webtoon </BannerCustomText>
        </Rows>
      </Banner>
    </Block>
  );
};

export default MainBanner;
