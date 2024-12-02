import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import IndividualCard from './IndividualCard';

const CardGroupComponent = () => {
  // 예시 데이터 (DB에서 가져온 데이터라고 가정)
  const cardsData = [
    {
      title: "제목 1",
      text: "내용 1",
      views: "1",
      comments: "2",
      nickName: "닉네임1"
    },{
      title: "제목 2",
      text: "내용 2",
      views: "3",
      comments: "4",
      nickName: "닉네임2"
    },{
      title: "제목 3",
      text: "내용 3",
      views: "5",
      comments: "6",
      nickName: "닉네임3"
    },{
      title: "제목 4",
      text: "내용 4",
      views: "7",
      comments: "8",
      nickName: "닉네임4"
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // 초기 로드 시 상태 설정
    handleResize();

    // cleanup 함수로 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateDisplayedCards = () => {
      if (windowWidth < 768) {
        setDisplayedCards(cardsData.slice(0, 1));
      } else if (windowWidth < 992) {
        setDisplayedCards(cardsData.slice(0, 2));
      } else if (windowWidth < 1400) {
        setDisplayedCards(cardsData.slice(0, 3));
      } else {
        setDisplayedCards(cardsData.slice(0, 4));
      }
    };

    updateDisplayedCards();
  }, [windowWidth]); // cardsData는 의존성 배열에서 제거

  return (
    <Row className='g-1'>
      {displayedCards.map((cardData, index) => (
        <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} key={index}>
          <IndividualCard {...cardData} />
        </Col>
      ))}
    </Row>
  );
};

export default CardGroupComponent;
