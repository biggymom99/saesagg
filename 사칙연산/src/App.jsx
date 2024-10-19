import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0); // 입력된 값
  const [method, setMethod] = useState(""); // 연산자
  const [result, setResult] = useState(0); // 연산 결과

  // 입력값 업데이트
  const handleInputChange = (event) => {
    setInputValue(Number(event.target.value)); // 입력값을 숫자로 변환
  };

  // 연산 처리 함수
  const calculate = () => {
    setResult((prevResult) => {
      switch (method) {
        case '+':
          return prevResult + inputValue;
        case '-':
          return prevResult - inputValue;
        case '*':
          return prevResult * inputValue;
        case '/':
          return inputValue !== 0 ? prevResult / inputValue : prevResult; // 0으로 나누는 경우 방지
        default:
          return prevResult;
      }
    });
  };

  // method가 변경될 때마다 연산 수행
  useEffect(() => {
    if (method) {
      calculate(); // 연산 함수 호출
    }
  }, [method]); // method가 변경될 때만 실행

  return (
    <>
      <input 
        type="number" 
        placeholder="숫자를 입력하세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      
      <button onClick={() => {
        setMethod('+');
        calculate();
      }}>➕</button>

      <button onClick={() => {
        setMethod('-');
        calculate();
      }}>➖</button>

      <button onClick={() => {
        setMethod('*')
        calculate();
      }}>✖</button>

      <button onClick={() => {
        setMethod('/')
        calculate();
        }}>➗</button>

      <h2>결과: {result}</h2>
    </>
  );
}

export default App;