// 뼈대랑 기능 역할임
import React from "react";

// 스타일 시트 연결
import "./Header.css";

// 로고 이미지 불러오기
import logoImage from "./logo.png";

// Header 컴포넌트(부품) 함수 정의하기

// 왼쪽에는 로고, 오른쪽에는 메뉴 링크 둘 예정
function Header() {
  // header 태그는 웹사이트 상단 부분을 뜻하는 시맨틱 태그 (의미있는 태그)
  // 일단 header-container 클래스 이름을 붙이고 나중에 css로 꾸밀 예정
  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={logoImage} className="logo-image" alt="Erin's Logo" />
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* 언어 변경 버튼 */}
      <div className="lang-buttons">
        <button className="lang-btn active">KOR</button>
        <span className="divider">|</span>
        <button className="lang-btn">ENG</button>
      </div>
    </header>
  );
}

export default Header;
