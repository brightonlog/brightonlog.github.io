// src/components/About/About.tsx
import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* 왼쪽: 프로필 사진 영역 */}
        <div className="about-image-wrapper">
          {/* 나중에 사진 파일을 <img src={profileImg} ... /> 로 바꾸면 돼요 */}
          <div className="placeholder-img">
            <span>👩‍💻</span>
          </div>
        </div>

        {/* 오른쪽: 자기소개 글 영역 */}
        <div className="about-text-wrapper">
          <h2 className="section-title">About Me</h2>
          <h3 className="sub-title">
            "성실함을 무기로 하루하루 성장하는 개발자"
          </h3>

          <p className="description">
            안녕하세요! <b>러시아어와 국제학</b>을 전공했지만, 기술로 가치를
            만드는 일에 매료되어 개발을 시작한 <b>SSAFY 14기 김예린</b>입니다.
            <br />
            <br />
            비전공자로 시작하여 <b>4개월 차</b>에 접어들었지만, 매일 새로운 것을
            배우는 즐거움을 느끼며 <b>풀스택 개발자</b>를 목표로 달리고
            있습니다. 단순히 코드만 짜는 것이 아니라, 팀원과 소통하며{" "}
            <b>사용자에게 친절한 서비스</b>를 만드는 것을 중요하게 생각합니다.
          </p>

          <div className="info-grid">
            <div className="info-item">
              <span className="label">Name</span>
              <span className="value">김예린 (Erin)</span>
            </div>
            <div className="info-item">
              <span className="label">Education</span>
              <span className="value">SSAFY 14기 (부울경)</span>
            </div>
            <div className="info-item">
              <span className="label">Interest</span>
              <span className="value">Web Dev, AI, Data </span>
            </div>
            <div className="info-item">
              <span className="label">Email</span>
              <span className="value">fls4804@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
