import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/component/ItemList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Link from 'next/link';
import { promises } from 'stream';

const Index = () => {
  const [childrenBookData, setChildrenBookData] = useState([]);
  const [webBookData, setWebBookData] = useState([]);
  const [humanBookData, setHumanBookData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const getData = () => {
    const CHILDREN_API_URL = 'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=동화';
    const WEB_API_URL = 'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=프로그래밍';
    const HUMAN_API_URL = 'https://dapi.kakao.com/v3/search/book?sort=accuracy&page=1&size=10&query=인문학';

    Promise.all([
      Axios.get(CHILDREN_API_URL, {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
      }),
      Axios.get(WEB_API_URL, {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
      }),
      Axios.get(HUMAN_API_URL, {
        headers: {
          Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
        },
      }),
    ]).then((res) => {
      console.log(res, '[[[[');
      setChildrenBookData(res[0].data.documents);
      setWebBookData(res[1].data.documents);
      setHumanBookData(res[2].data.documents);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>
      <Section>
        <ChildrenBooks> 아이들 추천 도서 </ChildrenBooks>
        <WrapperSlider style={{ width: '1050px' }}>
          <Slider {...settings}>
            {childrenBookData.map((book, idx) => {
              return (
                <Link href={`book/${book.isbn}`} key={idx}>
                  <a>
                    <ItemList thumbnail={book.thumbnail} title={book.title} />
                  </a>
                </Link>
              );
            })}
          </Slider>
        </WrapperSlider>
        <ChildrenBooks> IT 추천 도서 </ChildrenBooks>
        <WrapperSlider style={{ width: '1050px' }}>
          <Slider {...settings}>
            {webBookData.map((book, idx) => {
              return (
                <Link href={`book/${book.isbn}`} key={idx}>
                  <a>
                    <ItemList thumbnail={book.thumbnail} title={book.title} />;
                  </a>
                </Link>
              );
            })}
          </Slider>
        </WrapperSlider>
        <ChildrenBooks> 인문학 추천 도서 </ChildrenBooks>
        <WrapperSlider style={{ width: '1050px' }}>
          <Slider {...settings}>
            {humanBookData.map((book, idx) => {
              return (
                <Link href={`book/${book.isbn}`} key={idx}>
                  <a>
                    <ItemList thumbnail={book.thumbnail} title={book.title} />;
                  </a>
                </Link>
              );
            })}
          </Slider>
        </WrapperSlider>
      </Section>
    </Wrapper>
  );
};
export default Index;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
const Section = styled.section`
  position: relative;
  padding-top: 20px;
  /* top: 60px; */
`;

const WrapperSlider = styled.div`
  margin: 0 auto;

  .slick-prev:before,
  .slick-next:before {
    color: black;
  }

  .slick-list {
    height: 380px;
    padding: 10px;
    padding-left: 0px;
  }
`;

const ChildrenBooks = styled.h1`
  max-width: 1050px;
  margin: 0 auto 16px;
  padding: 6px 25px 0;
  font-size: 19px;
  font-weight: normal;
`;
