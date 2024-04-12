<h1 align="center">Survivor</h1>
<img width="584" alt="스크린샷 2024-04-13 오전 12 35 56" src="https://github.com/pieceofcakey/pieceofcakey/assets/102589090/df2fe268-3747-45a8-8e19-bee96a14170a">

<p>
  Survivor 은 바닐라 자바스크립트와 Phaser 3 를 활용하여 만든 웹 서바이벌 라이크 게임 입니다.
</p>

<div>

- [Deployed](https://survivorlike.netlify.app)

- [GitHub](https://github.com/pieceofcakey/Survivor)

</div>

## 📒 Contents

- [✈️ Demo](#️-demo)
- [🔧 Tech Stacks](#-tech-stacks)
- [🙋🏻‍♂️ Introduction](#️-introduction)
- [💪 Motivation](#-motivation)
- [🕹️ Features](#-features)
- [⛰️ Challenges](#️-challenges)
- [📚 What I learned](#-what-i-learned)
- [⏰ Project timeline](#-project-timeline)

<br>

## ✈️ Demo

To be updaed...

<br>

## 🔧 Tech Stacks

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Phaser 3](https://img.shields.io/badge/phaser3-E34F26.svg?style=for-the-badge&logo=&logoColor=#00C7B7)

### Deployment

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

<br>

## 🙋🏻‍♂️ Introduction

바닐라 코딩 부트캠프에서 3주간 진행한 개인 프로젝트로, 웹에서 플레이 할 수 있는 2d 탑다운 서바이벌 라이크 게임을 만들어 보았습니다. 보다 다양한 게임적 요소 구현 및 성능 최적화를 위해 Phaser 3 라이브러리를 활용하여 Web Gl, Canvas API 를 활용하여 웹 게임을 만들어 보았습니다.

<br>

## 💪 Motivation

저는 게임을 굉장히 좋아합니다. 사실, 비전공자인 제가 개발에 관심을 가지게 된 큰 계기 중 하나가 바로 게임이었습니다. 보다 많은 것을 만들 수 있는 웹 개발 공부를 선택 하였지만, 마음 한켠에는 언젠가 내가 배운 내용으로 웹에서 플레이 할 수 있는 게임을 만들어 보고 싶은 마음이 항상 존재 하였습니다. 개인 프로젝트는 부트캠프의 마지막 관문이자 혼자만의 힘으로 무언가를 만들어 내야하는 기간이었고, 이 기간은 제가 웹 게임을 만들어 볼 수 있는 아주 좋은 기회였습니다. 어떤 게임을 만들어 볼까 고민 중, 2022년 출시한 Vampire Survivor 라는 게임이 자바스크립트로 만들어졌다는 사실을 알게 되었고, 이 게임을 직접 Scratch 부터 만들어 보았습니다.

<br>

## 🕹 Features

1. 플레이 방법

- 게임 시작 버튼을 눌러서 시작합니다.
- 상하좌우 방향키 조작만으로 플레이 가능합니다.

2. 적

- 시간에 따라 등장하는 적의 종류 및 조합이 변합니다.
- 적의 종류 별 체력, 경험치, 아이템 드롭률이 상이합니다.

3. 레벨업

- 경험치가 100% 가 되면 레벨업을 합니다.
- 레벨업 시 새로운 무기가 자동으로 추가됩니다.

4. 무기

- 총 6가지 무기가 존재합니다
  - 화살
  - 화염구
  - 던지는 칼
  - 번개
  - 채찍
  - 쉴드
- 레벨업 시 무기가 추가되거나 기존 무기가 강화됩니다.

5. 게임오버

- 플레이어가 적에게 접촉 시, hp가 감소합니다.
- hp가 0이 되면 게임 오버가 됩니다.
- 게임 오버 시 처치한 적 수 , 플레이 타임, 달성 레벨이 표시됩니다.
- 재시작 버튼 및 메인화면으로 돌아가는 버튼이 존재합니다.

<br>

## ⛰️ Challenges

### 1. 웹 에서 게임?

웹에서 게임을 만들 수 있다는 사실은 개발을 배우기 전 부터도 느낌적으로 알고 있었습니다. 어릴적 많이 플레이 했던 플래시 게임들이 그 반증들이었습니다.
게임은 사실 굉장히 많은 부분이 추상화 되어있다고 생각합니다. 이번에 제가 프로젝트를 진행하며 깨달은 것 중 하나는, 결국 게임은 어떤 오브젝트들을 그리고, 그 오브젝트들을 적절하게 움직이고, 각 오브젝트간의 상호작용에 대한 로직을 세우는 것이 모든 게임의 기본이란걸 알게 됐습니다. 웹에서 어떤 그래픽을 그리는 행위는 html의 canvas 요소에 브라우저에서 제공하는 canvas api 및 webgl을 통해 동적 그래픽을 구현하는 것이 일반적입니다. 저에게는 canvas api, webgl 두가지의 선택지가 생겼고, 이 둘에 대해 비교를 해보았습니다.

### 2. Web Gl vs Canvas API

<img width="508" alt="스크린샷 2024-04-13 오전 12 34 57" src="https://github.com/pieceofcakey/pieceofcakey/assets/102589090/83c3b4d1-5a15-44bd-ad4d-5e20dbb780bf">
<p></p>
많은 차이점이 있지만, 제가 가장크게 본 비교 포인트는 러닝 커브와 성능의 차이였습니다. canvas api는 고수준의 그래픽 api이기 때문에 사용자 친화적입니다. 따라서 러닝커브는 낮지만, 직접적으로 렌더링 파이프라인에 접근하는것은 어렵기 때문에 성능적으로는 열세입니다.
반대로 webgl은 낮은 수준의 그래픽 api이기에 이를 제대로 활용하기 위해서 선행학습 되어야 하는 내용이 많기 때문에 러닝커브가 높지만, 직접적으로 렌더링 파이프라인에 접근하는것이 가능하기 때문에 성능적으로 우세합니다

### 3. Phaser?

이런 비교를 하던 중, 제가 발견한 javascript 라이브러리가 있습니다. 바로 Phaser 입니다. Phaser는 웹에서 게임을 만들기 위해 필요한 기능들을 추상화 하여 제공하는 게임을 만들기에 매우 적합한 라이브러리 입니다. 또한, Phaser는 프로젝트 설정 시 어떤 렌더링 api를 사용할 지 정할 수 있습니다. 이는 즉, Phaser 라이브러리를 사용하여 코드를 작성하면, 동일한 코드를 canvas api로 렌더링 할지, webgl로 렌더링 할지 정할 수 있다는 뜻입니다. 이에 저는 2주라는 시간내에 게임적인 요소가 충분히 들어간 게임을 만들고 싶었기에, 최종적으로 낮은 러닝커브와 높은 퍼포먼스 두마리 토끼를 동시에 잡을 수 있는 Phaser 라는 라이브러리를 적극적으로 사용하여 프로젝트를 만들게 되었습니다.

<br>

## 📚 What I learned

프로젝트를 진행하며 처음 접해보는 기술을 사용했기 때문에 이런저런 어려움을 많이 겪었지만 굉장히 재미있었던 프로젝트 였습니다. 정말 막연하게 생각만 하고 있던 '게임' 이라는 크고 추상적인 문제 또한 논리적 사고를 통해 작은 문제들로 나누고, 프로그래밍적으로 표현하는 것이라는 점에서 다시 한번 논리적 사고의 중요성에 대해 생각하는 계기가 되었습니다. 이를 통해서 앞으로 어떤 도전을 하게 되던지 논리적으로 문제를 쪼갤 수 있는 영감을 많이 얻게 된 것 같습니다.

<br>

## ⏰ Project timeline

**1주차**

- 아이디어 수집, 선정
- POC 및 주제 관련 조사
- 기술 스택 결정
- ESLint, Prettier, Husky 설정
- 칸반 태스크 작성

**2주차**

- Scenes 개발
- 플레이어 구현
- 적 구현
- 무기 구현

**3주차**

- 공격 구현
- 피격 구현
- 레벨업 구현
- 아이템 구현
- QA 및 게임 밸런싱
