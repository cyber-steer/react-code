import React, { useState } from 'react';
import { Container, Row, Button, Col, Badge } from 'react-bootstrap';

const questions = {
  UNIX시스템: [
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
      question: "셸의 명령 행에서 사용하는 특수 문자에 관한 설명이다. 잘못된 것은?",
      options: ["| : 특수 문자 앞에 붙어 특수 문자의 기능을 제거함",
                ">> : 표준 출력을 파일의 끝에 덧붙일 때 사용함",
                "# : 이후의 문자들이 주석으로 처리됨",
                "! : 명령 히스토리 기능을 이용할 때 사용함"],
      answer: 0
    },
    {
      question: "다음 명령의 실행 결과로 생각되는 것은? 맨 앞의 $는 셸 프롬프트이며 passwd는 비밀번호를 바꿀 때 사용하는 명령이다.",
      content: 'content',
      options: ["",
                "",
                "",
                ""],
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
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null); 
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  const handleSubjectSelect = (subject) => {
    const questionIndex = Math.floor(Math.random() * questions[subject].length);
    setSelectedSubject(subject);
    setCurrentQuestionIndex(questionIndex);
    const shuffledOptions = shuffleArray(questions[subject][questionIndex].options);
    setShuffledOptions(shuffledOptions);
    setCorrectOptionIndex(shuffledOptions.indexOf(questions[subject][questionIndex].options[questions[subject][questionIndex].answer]));
    setSelectedOption(null);
    setCheckedAnswer(false);
  };

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setCheckedAnswer(false); 
  };

  const handleCheckAnswer = () => {
    setCheckedAnswer(true)
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
    setCorrectOptionIndex(shuffledOptions.indexOf(questions[selectedSubject][nextIndex].options[questions[selectedSubject][nextIndex].answer])); 
    setSelectedOption(null);
    setCheckedAnswer(false);
  };
  

  const buttonStyle = {
    padding: '10px',
    fontSize: '14px',
    marginBottom: '10px',
    color: 'black', 
    textAlign: 'left',
    width: 'auto'
  };

  const badgeStyle = {
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    marginRight: '10px',
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
    justifyContent: 'space-between',
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
      backgroundColor: backgroundColor,
      color: 'black',
      textAlign: 'left'
    };
  };

  const checkAnswerButtonStyle = {
    marginRight: '1rem'
  };

  const containerStyle = {
    marginTop: '20px'
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
            <p>{questions[selectedSubject][currentQuestionIndex].question}</p>
            {questions[selectedSubject][currentQuestionIndex].content && ( <pre>{questions[selectedSubject][currentQuestionIndex].content}</pre> )}
          </div>
          {questions[selectedSubject][currentQuestionIndex].content && (
            <div style={questionStyle}>
                <pre>{questions[selectedSubject][currentQuestionIndex].content}</pre>
            </div>
          )}
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
            bg={selectedSubject === 'UNIX시스템' ? "dark" : "secondary"} 
            onClick={() => handleSubjectSelect('UNIX시스템')} 
            style={badgeStyle}
          >
            UNIX시스템
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
      </Row>
    </Container>
  );
}

export default About;
