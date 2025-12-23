// src/components/Home/Home.tsx

import React from "react";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="home-content">
        <h2 className="greeting">Hello, I'm Erin! 👋</h2>
        <h1 className="title">
          사용자가 무엇을 필요로하는지 아는
          <br />
          <span className="highlight"> 주니어 Fullstack 개발자 김예린</span>
          입니다.
        </h1>
        <p className="description">
          Frontend와 Backend를 아우르는 Fullstack 개발자를 꿈꾸며,
          <br />
          꾸준히 새로운 기술을 배우고 기록합니다.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>
          <a
            href="https://github.com/brightonlog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
