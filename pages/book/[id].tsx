import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Axios from 'axios';
import styled from 'styled-components';
import Router from 'next/router';

const Book = () => {
  const router = useRouter();
  const { id } = router.query;
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
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
      setBookData(
        [...res[0].data.documents, ...res[1].data.documents, ...res[2].data.documents].filter((e) => {
          return e.isbn === id;
        }),
      );
    });
  }, []);

  const DateTimeReplace = () => {
    if (!bookData || bookData.length === 0) return;
    const year = bookData[0].datetime.substr(0, 4);
    const month = bookData[0].datetime.substr(5, 2);
    const date = bookData[0].datetime.substr(8, 2);
    return `${year}년${month}월${date}일`;
  };
  console.log(bookData, id, 'dddd');
  return (
    <Wrapper>
      {bookData?.length && id ? (
        <>
          <Container>
            <BookInfo>
              <Img src={bookData[0]?.thumbnail} />
              <Detail>
                <Title>{bookData[0]?.title}</Title>
                <Description>
                  <span>{bookData[0]?.authors} 지음</span>
                  <span>{bookData[0]?.publisher}</span>
                  <span>{DateTimeReplace()} 출간</span>
                </Description>
                <Price>판매가 : {bookData[0]?.price}원</Price>
                <DetailItem>
                  <a href={bookData[0]?.url} target="_blank">
                    구매하러가기
                  </a>
                  <button type="button" onClick={() => Router.back()}>
                    뒤로가기
                  </button>
                </DetailItem>
              </Detail>
            </BookInfo>
            <IntroTitile>책 소개</IntroTitile>
            <Intro>{bookData[0]?.contents}...(생략)</Intro>
          </Container>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Book;

const Wrapper = styled.div`
  height: calc(100vh - 90px);

  button {
    width: 80px;
    height: 40px;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 30px;
    cursor: pointer;

    :hover {
      background-color: #b4b4b4;
    }
  }
`;

const Container = styled.div`
  height: 100%;
  width: 900px;
  margin: 0 auto;
`;

const BookInfo = styled.div`
  display: flex;
  border-bottom: 1px solid #b4b4b4;
  padding: 20px 0px;
`;

const Detail = styled.section`
  height: 100%;
  padding: 5px 20px;
  width: 600px;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: large;
  margin: 10px 0px;
`;

const IntroTitile = styled.h3`
  font-size: large;
  margin: 10px 0px;
`;

const Intro = styled.article`
  font-size: medium;
  margin: 10px 0px;
  margin-bottom: 20px;
  height: auto;
  overflow: hidden;
`;

const Title = styled.h1`
  height: 100%;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 100%;
  width: 300px;
  border: 1px solid #b4b4b4;
`;

const Description = styled.div`
  span {
    color: #b4b4b4;
    font-weight: 700;

    :nth-child(1)::after {
      content: 'ㅣ';
    }

    :nth-child(2)::after {
      content: 'ㅣ';
    }
  }
`;
