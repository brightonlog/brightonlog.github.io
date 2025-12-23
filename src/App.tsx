// src/App.tsx

// 리액트 사용 선언하기
import React from "react";
// CSS 파일 연결하기
import "./App.css";

// Header import 하기
import Header from "./components/Header/Header";

// Home import 하기
import Home from "./components/Home/Home";

// About import 하기
import About from "./components/About/About";

// App 함수 컴포넌트 만들기. 이 함수 하나가 화면의 한 덩어리가 됨
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

// 이 App 함수를 다른 파일(index.tsx)에서 가져다 쓸 수 있도록 내보내기
export default App;
