import React, { useState } from 'react';
import { Container, Row, Button, Col, Badge } from 'react-bootstrap';

const questions = {
  UNIX시스템: [
    {
      question: "다음은 셸 스크립트의 일부이다. 밑줄 그은 부분의 의미를 바르게 설명한것은?",
      content: '# .bashrc\nif <u>[ -f /etc/bashrc ]</u>; then\n        . /etc/bashrc\nfi',
      options: ["/etc/bashrc가 존재하고 정규 파일이면 참",
                "/etc/bashrc가 존재하고 디렉터리이면 참",
                "/etc/bashrc가 실행 가능한 파일이면 참",
                "/etc/bashrc가 존재하지 않으면 참"],
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
  
  const contentStyle = {
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  };
  
  const contentPreStyle = {
    margin: '10px',
    textAlign: 'left'
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
          </div>
          {questions[selectedSubject][currentQuestionIndex].content && (
            <div style={contentStyle}>
                <pre style={contentPreStyle}>{questions[selectedSubject][currentQuestionIndex].content}</pre>
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
