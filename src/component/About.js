import React, { useState } from 'react';
import { Container, Row, Button, Col, Badge } from 'react-bootstrap';

const questions = {
  A: [
    {
      question: "다음중 GNU 프로젝트와의 관련성이 가장 적은 것은?",
      options: ["리처드 스톨먼", "GPL", "Apache 서버", "자유 소프트웨어 운동"],
      answer: 0
    },
    {
      question: "리눅스 표준 디렉터리의 용도에 관한 설명으로 잘못된 것은?",
      options: ["/proc - 커널이 사용하는 가상의 파일 시스템",
                "/home - 사용자의 홈 디렉터리가 생성되는 곳",
                "/dev - 시스템 운영 중에 생기는 가변 자료가 저장되는 곳",
                "/etc - 시스템의 중요 환경 설정 파일이 위치하는 곳"],
      answer: 0
    },
    {
      question: "AAA는 무엇일까?",
      options: ["가", "나", "다", "라"],
      answer: 0
    },
  ],
  B: [
    {
      question: "B는 무엇일까?",
      options: ["가", "나", "다", "라"],
      answer: 0
    },
    {
      question: "BB는 무엇일까?",
      options: ["가", "나", "다", "라"],
      answer: 0
    },
  ],
  C: [
    {
      question: "C는 무엇일까?",
      options: ["가", "나", "다", "라"],
      answer: 0
    },
    {
      question: "CC는 무엇일까?",
      options: ["가", "나", "다", "라"],
      answer: 0
    },
  ]
};

// 배열을 무작위로 섞는 함수
const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function About() {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null); // 정답의 인덱스를 저장하는 상태
  const [checkedAnswer, setCheckedAnswer] = useState(false); // 정답 확인 여부 상태

  const handleSubjectSelect = (subject) => {
    const questionIndex = Math.floor(Math.random() * questions[subject].length);
    setSelectedSubject(subject);
    setCurrentQuestionIndex(questionIndex);
    const shuffledOptions = shuffleArray(questions[subject][questionIndex].options);
    setShuffledOptions(shuffledOptions);
    setCorrectOptionIndex(shuffledOptions.indexOf(questions[subject][questionIndex].options[questions[subject][questionIndex].answer])); // 정답의 새로운 인덱스를 설정
    setSelectedOption(null);
    setCheckedAnswer(false); // 정답 확인 상태 초기화
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setCheckedAnswer(false); // 선택 시 정답 확인 상태 초기화
  };

  const handleCheckAnswer = () => {
    setCheckedAnswer(true); // 정답 확인 상태로 변경
  };

  const handleNextQuestion = () => {
    const currentIdx = currentQuestionIndex;
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * questions[selectedSubject].length);
    } while (nextIndex === currentIdx);
  
    setCurrentQuestionIndex(nextIndex);
    const shuffledOptions = shuffleArray(questions[selectedSubject][nextIndex].options);
    setShuffledOptions(shuffledOptions);
    setCorrectOptionIndex(shuffledOptions.indexOf(questions[selectedSubject][nextIndex].options[questions[selectedSubject][nextIndex].answer])); // 정답의 새로운 인덱스를 설정
    setSelectedOption(null);
    setCheckedAnswer(false); // 정답 확인 상태 초기화
  };
  

  const buttonStyle = {
    padding: '10px',
    fontSize: '14px',
    marginBottom: '10px',
    color: 'black', // 글자 색을 검정색으로 설정
    textAlign: 'left', // 텍스트를 좌측 정렬
    width: 'auto' // 너비를 자동으로 조정
  };

  const badgeStyle = {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer', // 커서가 포인터로 변경되도록 설정
    marginRight: '10px', // 뱃지 간격 추가
    marginBottom: '10px'
  };

  const questionStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px'
  };

  const formGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between', // 버튼을 좌우로 배치
    alignItems: 'center',
    marginTop: '1rem'
  };

  const optionButtonStyle = (index) => {
    let backgroundColor = selectedOption === index ? '#d4d4d4' : '';
    if (checkedAnswer && index === selectedOption) {
      backgroundColor = selectedOption === correctOptionIndex ? 'green' : 'red';
    }
    return {
      width: '100%',
      marginBottom: '10px',
      backgroundColor: backgroundColor,
      color: 'black',
      textAlign: 'left'
    };
  };

  const checkAnswerButtonStyle = {
    marginRight: '1rem'
  };

  const containerStyle = {
    marginTop: '20px' // 상단에 마진을 추가
  };

  const placeholderStyle = {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const dividerStyle = {
    margin: '20px 0',
    borderTop: '1px solid #ddd'
  };

  return (
    <Container style={containerStyle}>
      {selectedSubject === null && (
        <div style={placeholderStyle}>
          <h3>과목을 선택하세요</h3>
          <p>아래 버튼을 클릭하여 과목을 선택해 주세요.</p>
        </div>
      )}
      {selectedSubject !== null && (
        <>
          <div style={questionStyle}>
            <h3>{selectedSubject}과목 문제</h3>
            <p>{questions[selectedSubject][currentQuestionIndex].question}</p>
          </div>
          <div>
            {shuffledOptions.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionSelect(index)}
                style={optionButtonStyle(index)}
                variant={selectedOption === index ? 'secondary' : 'light'}
              >
                {`${index + 1}. ${option}`}
              </Button>
            ))}
            <div style={formGroupStyle}>
              <Button variant="info" onClick={handleCheckAnswer} style={checkAnswerButtonStyle}>정답확인</Button>
              <Button variant="secondary" onClick={handleNextQuestion}>다음문제</Button>
            </div>
          </div>
        </>
      )}
      <div style={dividerStyle}></div> {/* 선 추가 */}
      <Row className="mt-4">
        <Col xs="auto">
          <Badge 
            bg={selectedSubject === 'A' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('A')} 
            style={badgeStyle}
          >
            A과목
          </Badge>
        </Col>
        <Col xs="auto">
          <Badge 
            bg={selectedSubject === 'B' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('B')} 
            style={badgeStyle}
          >
            B과목
          </Badge>
        </Col>
        <Col xs="auto">
          <Badge 
            bg={selectedSubject === 'C' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('C')} 
            style={badgeStyle}
          >
            C과목
          </Badge>
        </Col>
        <Col xs="auto">
          <Badge 
            bg={selectedSubject === 'D' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('D')} 
            style={badgeStyle}
          >
            D과목
          </Badge>
        </Col>
        <Col xs="auto">
          <Badge 
            bg={selectedSubject === 'E' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('E')} 
            style={badgeStyle}
          >
            E과목
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
