// src/components/Projects/Projects.tsx
import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <h3 className="sub-title">프로젝트 다이어리</h3>

        <div className="project-grid">
          
          {/* --- 프로젝트 1번: Don't Worry --- */}
          <div className="project-card">
            <div className="card-header">
              <span className="project-badge">Team Project</span>
              <h3>Don't Worry</h3>
            </div>
            <p className="project-date">2025.12.19 - 2025.12.26 </p>
            <p className="project-desc">
              금융을 가볍게 만들어주는 당신 곁의 비버 비서, '돈워리'입니다.<br/>
              귀여운 '비버' 마스코트를 활용해 사용자 맞춤 금융 테크 서비스입니다.
            </p>
            <div className="project-tech">
              <span>Python</span>
              <span>Django</span>
              <span>Vue.js</span>
              <span>MySQL</span>
            </div>
            <div className="card-footer">
              <a href="https://github.com/brightonlog" className="card-btn">GitHub</a>
            </div>
          </div>

          {/* --- 프로젝트 2번: 포트폴리오 웹사이트 --- */}
          <div className="project-card">
            <div className="card-header">
              <span className="project-badge">Personal</span>
              <h3>My Portfolio</h3>
            </div>
            <p className="project-date">2025.12 ~ 진행 중</p>
            <p className="project-desc">
              ALL ABOUT ME! Erin<br/>
              React와 TypeScript를 학습하며 직접 제작한 개인 포트폴리오 사이트입니다.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS3</span>
            </div>
            <div className="card-footer">
              <a href="https://github.com/brightonlog" target="_blank" rel="noopener noreferrer" className="card-btn">GitHub</a>
            </div>
          </div>

          {/* --- 프로젝트 3번: AIoT Team --- */}
          <div className="project-card">
            <div className="card-header">
              <span className="project-badge">Team Project</span>
              <h3>AIoT 커밍순</h3>
            </div>
            <p className="project-date">2025.12 ~ 기획 단계</p>
            <p className="project-desc">
              AI와 IoT를 결합한 활용한 스마트 솔루션 프로젝트입니다.<br/>
              현재 팀 빌딩 및 아이디어 구체화 단계에 있습니다.
            </p>
            <div className="project-tech">
              <span>AIOT</span>
              <span>Python</span>
              <span>Embedded</span>
            </div>
            <div className="card-footer">
              <span className="coming-soon">Coming Soon...</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;