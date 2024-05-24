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

- [🔧 Tech Stacks](#-tech-stacks)
- [🙋🏻‍♂️ Introduction](#️-introduction)
- [💪 Motivation](#-motivation)
- [🕹️ Features](#-features)
  - [1. 플레이 방법](#1-플레이-방법)
  - [2. 적](#2-적)
  - [3. 무기](#3-레벨업)
  - [4. 레벨 업](#4-무기)
  - [5. 게임 오버](#5-게임오버)
- [⛰️ Challenges](#️-challenges)
  - [1. Phaser 3 프레임워크 채택 이유](#1-Phaser3-프레임워크-채택-이유)
    - [1.1 웹 게임은 어떻게 만들 수 있을까?](#11-웹-게임은-어떻게-만들-수-있을까?)
    - [1.2 WebGL vs CanvasAPI](#12-WebGL-vs-Canvas-API)
    - [1.3 Phaser를 사용해보자!](#13-Phaser를-사용해보자!)
  - [2. 무한 맵 구현하기](#2-무한-맵-구현하기)
    - [2.1 맵은 얼마나 커야 할까?](#21-맵은-얼마나-커야-할까?)
    - [2.2 하나의 큰 맵 vs 무한히 흐르는 작은 맵](#22-하나의-큰-맵-vs-무한히-흐르는-작은-맵)
      - [2.2.1 하나의 큰 맵](#221-하나의-큰-맵)
      - [2.2.2 임계치 좌표 설정 후 맵을 이어 붙이기](#222-임계치-좌표-설정-후-맵을-이어-붙이기)
      - [2.2.3 플레이어 이동 방향으로 맵 에셋의 좌표 이동](#223-플레이어-이동-방향으로-맵-에셋의-좌표-이동)
    - [2.3 어떻게 무한맵을 구현할 수 있을까?](#23-어떻게-무한맵을-구현할-수-있을까?)
  - [3. 몬스터 스폰 위치 정하기](#3-몬스터-스폰-위치-정하기)
    - [3.1 몬스터는 어느 장소에서 스폰해야 할까?](#31-몬스터는-어느-장소에서-스폰해야-할까?)
    - [3.2 정해진 위치 vs 완전 랜덤 위치 vs 일정 거리 이상 랜덤 위치](#32-정해진-위치-vs-완전-랜덤-위치-vs-일정-거리-이상-랜덤-위치)
      - [3.2.1 고정된 위치](#321-고정된-위치)
      - [3.2.2 완전 랜덤 위치](#322-완전-랜덤-위치)
      - [3.2.3 일정 거리 이상 랜덤 위치](#323-일정-거리-이상-랜덤-위치)
    - [3.3 일정 거리 랜덤 위치 -> 유저 플레이 경험까지 고려해보자!](#33-일정-거리-랜덤-위치-->-유저-플레이-경험까지-고려해보자!)
- [📚 What i learned](#-What-i-Learned)
  - [1. 추가 기능 기획](#1-추가-기능-기획)
    - [1.1 보다 다양한 적 유형](#11-보다-다양한-적-유형)
    - [1.2 무기 융합 기능](#12-무기-융합-기능)
    - [1.3 실시간 멀티 플레이 게임](#13-실시간-멀티-플레이-게임)
  - [2. 회고](#2-회고)
- [⏰ Project timeline](#-Project-timeline)

<br>

## 🔧 Tech Stacks

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Phaser 3](https://img.shields.io/badge/phaser3-E34F26.svg?style=for-the-badge&logo=&logoColor=#00C7B7)

### Deployment

![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

<br>

## 🙋🏻‍♂️ Introduction

바닐라 코딩 부트캠프에서 3주간 진행한 개인 프로젝트로, 웹에서 플레이 할 수 있는 2d 탑다운 액션 게임을 만들어 보았습니다. 보다 다양한 게임적 요소 구현 및 성능 최적화를 위해 Phaser 3 라이브러리를 활용하여 WebGL, Canvas API 를 활용하여 웹 게임을 만들어 보았습니다.

<br>

## 💪 Motivation

저는 게임을 굉장히 좋아합니다. 사실, 비전공자인 제가 개발에 관심을 가지게 된 큰 계기 중 하나가 바로 게임이었습니다. 보다 많은 것을 만들 수 있는 웹 개발 공부를 선택 하였지만, 마음 한켠에는 언젠가 내가 배운 내용으로 웹에서 플레이 할 수 있는 게임을 만들어 보고 싶은 마음이 항상 존재 하였습니다. 개인 프로젝트는 부트캠프의 마지막 관문이자 혼자만의 힘으로 무언가를 만들어 내야하는 기간이었고, 이 기간은 제가 웹 게임을 만들어 볼 수 있는 아주 좋은 기회였습니다. 어떤 게임을 만들어 볼까 고민 중, 2022년 출시한 Vampire Survivor 라는 게임이 자바스크립트로 만들어졌다는 사실을 알게 되었고, 이 게임을 직접 Scratch 부터 만들어 보았습니다.

<br>

## 🕹 Features

##### 1. 플레이 방법

- 게임 시작 버튼을 눌러서 시작합니다.
- 상하좌우 방향키 조작만으로 플레이 가능합니다.
- 사방에서 몰려오는 몬스터를 피해 최대한 오랜 시간동안 살아남는 게임 입니다.

##### 2. 적

- 시간에 따라 등장하는 적의 종류 및 조합이 변합니다.
- 적의 종류 별 체력, 경험치, 아이템 드롭률이 상이합니다.

1. 적 종류

<br>

|      | 체력 | 공격력 | 이동속도 | 경험치 |
| :--: | :--: | :----: | :------: | :----: |
| LV1  |  2   |   5%   |   fast   |   10   |
| LV2  |  8   |  10%   |  medium  |   20   |
| LV3  |  20  |  20%   |  medium  |   40   |
| LV4  |  38  |  25%   |  medium  |   70   |
| LV5  |  62  |  33%   |   slow   |  110   |
| BOSS | 1000 |  50%   |   slow   |  1000  |

<br>

2. 시간별 몬스터 웨이브

<br>

|         | LV1  | LV2 | LV3 | LV4 | LV5 | BOSS |
| :-----: | :--: | :-: | :-: | :-: | :-: | :--: |
| 0 ~ 1분 | 100% |     |     |     |     |      |
| 1 ~ 2분 | 80%  | 20% |     |     |     |      |
| 2 ~ 3분 | 30%  | 40% | 30% |     |     |      |
| 3 ~ 4분 | 10%  | 40% | 30% | 20% |     |      |
| 4 ~ 5분 |      | 20% | 20% | 30% | 30% |      |
| 5 ~ 6분 |      |     | 20% | 30% | 40% |      |
| 6 ~ 7분 |      |     |     | 30% | 60% | 10%  |

<br>

##### 3. 레벨업

- 경험치가 100% 가 되면 레벨업을 합니다.
- 레벨업 시 새로운 무기가 자동으로 추가됩니다.
- 기존에 있던 무기가 강화 될 수 있습니다.

##### 4. 무기

- 총 **6가지 무기**가 존재합니다
  - 화살
  - 화염구
  - 던지는 칼
  - 번개
  - 채찍
  - 쉴드
- 레벨업 시 무기가 추가되거나 기존 무기가 강화됩니다.

- 무기 종류

<br>

|        | 공격력 |            공격방식            | 쿨타임 |
| :----: | :----: | :----------------------------: | :----: |
|  채찍  |   1    | 플레이어가 바라보는 방향 앞 뒤 |  2초   |
|  화살  |   1    |  플레이어 기준 가장 가까운 적  |  2초   |
|  단검  |   1    |  플레이어가 바라보는 방향 앞   |  2초   |
|  갑옷  |   1    |   플레이어 주변 빙빙 돌아감    |   x    |
| 화염구 |   3    |     플레이어 기준 랜덤 적      |  4초   |
|  번개  |   5    |     플레이어 기준 랜덤 적      |  4초   |

##### 5. 게임오버

- 플레이어가 적에게 접촉 시, hp가 감소합니다.
- hp가 0이 되면 게임 오버가 됩니다.
- 게임 오버 시 처치한 적 수 , 플레이 타임, 달성 레벨이 표시됩니다.
- 재시작 버튼 및 메인화면으로 돌아가는 버튼이 존재합니다.

<br>

## ⛰️ Challenges

제 프로젝트는 2d 액션 게임으로, 맵 이라는 공간 위의 다양한 오브젝트(플레이어, 몹, 무기, 아이템) 들이 서로 상호작용 하며 진행되는 로직의 게임을 구현하고자 했습니다. 이 섹션에서는 제가 게임을 구현하며 정의해본 문제들과, 그 문제를 해결하기 위한 방법들, 선정한 방법에 대한 설명들을 서술해보았습니다.

### 1. Phaser3 프레임워크 채택 이유

Phaser3 는 웹에서 플레이 가능한 게임을 만들기 위한 자바스크립트 프레임 워크입니다. 이번 섹션에서는 제 프로젝트에 Phaser3를 사용하게 된 계기에 대해 설명 해 보겠습니다.

#### 1.1 웹 게임은 어떻게 만들 수 있을까?

---

웹에서 게임을 만들 수 있다는 사실은 개발을 배우기 전 부터도 느낌적으로 알고 있었습니다. 어릴적 많이 플레이 했던 플래시 게임들이 그 반증들이었습니다.
게임은 사실 굉장히 많은 부분이 **추상화** 되어있다고 생각합니다. 이번에 제가 프로젝트를 진행하며 깨달은 것 중 하나는, **결국 게임은 어떤 오브젝트들을 그리고, 그 오브젝트들을 적절하게 움직이고, 각 오브젝트간의 상호작용에 대한 로직을 세우는 것이 모든 게임의 기본**이란걸 알게 됐습니다. 웹에서 어떤 그래픽을 그리는 행위는 html의 canvas 요소에 브라우저에서 제공하는 **Canvas API 및 WebGL**을 통해 동적 그래픽을 구현하는 것이 일반적입니다. 저에게는 Canvas API, WebGL 두가지의 선택지가 생겼고, 이 둘에 대해 비교를 해보았습니다.

#### 1.2 WebGL vs Canvas API

---

|            | 추상화 레벨 | 러닝커브 | 퍼포먼스 |
| :--------: | :---------: | :------: | :------: |
|   WebGL    |   고수준    |   낮음   |   낮음   |
| Canvas API |   저수준    |   높음   |   높음   |

많은 차이점이 있지만, 제가 가장크게 본 비교 포인트는 **러닝 커브와 성능의 차이**였습니다. 렌더링 파이프라인에 직접 접근 가능 여부에 따라 저수준, 고수준을 정의해 보았을 때, **Canvas API**는 추상화가 잘 되어있고, 고수준의 그래픽 API이기 때문에 **사용자 친화적**입니다. 이에 따라서 자연스럽게 **러닝커브는 낮지만**, 직접적으로 렌더링 파이프라인에 접근하는것은 어렵기 때문에 **성능적으로는 열세**입니다.

반대로 **WebGL**은 낮은 수준의 그래픽 api이기에 이를 제대로 활용하기 위해서 선행학습 되어야 하는 내용이 많기 때문에 **러닝커브가 높지만**, 직접적으로 렌더링 파이프라인에 접근하는것이 가능하기 때문에 **성능적으로 우세**합니다

#### 1.3 Phaser3, WebGL 과 Canvas API 모두 활용 가능!

---

이런 비교를 하던 중, 제가 발견한 **Javascript 라이브러리**가 있습니다. 바로 **Phaser3** 입니다. Phaser는 **웹에서 게임을 만들기 위해 필요한 기능들을 추상화 하여 제공**하기 때문에 게임을 만들기에 매우 적합한 라이브러리 입니다. 또한, Phaser3는 프로젝트 초기 설정 시 **어떤 렌더링 api를 사용할 지 정할 수 있습니다**. 이는 즉, Phaser3 라이브러리를 사용하여 코드를 작성하면, **동일한 코드를 Canvas API 로 렌더링 할지, WebGL 렌더링 할지 정할 수 있다는 뜻**입니다. 이에 저는 2주라는 시간내에 게임적인 요소가 충분히 들어간 게임을 만들고 싶었기에, 최종적으로 **낮은 러닝커브와 높은 퍼포먼스** 두마리 토끼를 동시에 잡을 수 있는 Phaser3를 적극적으로 사용하여 프로젝트를 만들게 되었습니다.

### 2. 무한 맵 구현하기

제 프로젝트에서의 **맵**은 **플레이가 진행되는 공간을 의미**합니다. 플레이가 이루어지는 공간은 **크기, 확장 여부 등 그 성질에 따라 매우 다른 게임적 특성**을 지니기에, 제가 구현하고자 하는 게임에 걸맞는 특성을 우선 정의해야 했습니다.

#### 2.1 맵은 얼마나 커야 할까?

---

제가 만들고자 하는 게임은 플레이어 오브젝트를 조작하여 최대한 오랜 시간 버티는 게임이고, 지속적으로 몬스터를 피해 움직여야 하기에 **맵의 크기가 일단 커야 한다**고 생각했습니다. 하지만 맵의 크기가 얼마나 커야하는지, 움직임에 따라 확장되어야 하는지, 아무리 맵이 크더라도 결국 맵의 끝이 존재 할텐데 유저 경험을 해치진 않을지에 대한 고민이 생겼고, 위 방식들에 대해 **성능, 구현 난이도, 유저 경험**에 대해 비교해 보았습니다.

#### 2.2 하나의 큰 맵 vs 무한히 흐르는 작은 맵

---

##### 2.2.1 **하나의 큰 맵**

가장 기본적으로 생각 할 수 있는 방법입니다. 맵을 이루는 에셋을 그대로 렌더링 하고, 플레이 공간을 해당 에셋의 크기만큼 제한 하면 되고 가장 간단하게 구현 할 수 있었습니다. 하지만 해당 방식은 플레이 공간이 제한되고, 제가 구현하고자 하는 게임과는 **어울리지 않는 방식** 이었습니다.
<br>

   <img width="873" alt="스크린샷 2024-05-22 오후 6 22 16" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/760fb1ad-82ea-42a4-9948-06907c790027">

##### 2.2.2 **임계치 좌표 설정 후 맵을 이어 붙이기**

다음으로 생각 한 방식은, 하나의 큰 맵으로 끝나는 것이 아니라, **유저가 일정 x,y 좌표를 넘어가면 가로 혹은 세로로 동일한 맵 에셋을 이어 붙이는 방식** 이었습니다. 이는 말 그대로 플레이어 이동 방향으로 무한히 맵을 생성해 나가는 방식이기에 제가 추구했던 목표와 잘 맞는 방식이었습니다. 하지만 이는 결국 한 방향으로 무한히 이동을 하면 맵 에셋 또한 무한히 생성되게 되므로 **효율적인 리소스 관리 측면에서는 매우 좋지 못한 방식** 이었습니다.
<br>

   <img width="873" alt="스크린샷 2024-05-22 오후 6 29 06" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/df7aeba1-10ac-48dc-9baa-29133e65182d">

##### 2.2.3 **플레이어 이동 방향으로 맵 에셋의 좌표 이동**

마지막으로 생각한 방식은 **착시를 이용하는 방법** 입니다. 만약, **유저가 이동하는 방향으로 맵 에셋이 똑같이 따라오게 만들 수 있다면** 작은 맵으로도 무한한 맵과 동일한 효과를 줄 수 있다고 판단하였습니다. 이 방법이 성능적으로, 유저 경험적으로 가장 적합한 방식이라고 생각하였고 해당 방법을 채택하여 무한 맵을 구현 하였습니다.
<br>

<img width="873" alt="스크린샷 2024-05-24 오전 10 36 24" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/2c3b5aa5-aa10-4d31-a463-1c27416e2577">

#### 2.3 어떻게 무한맵을 구현할 수 있을까?

---

우선, 타일 형식의 맵 리소스를 유저가 바라보는 브라우저 뷰포트의 크기 만큼만 채우고, 플레이어 오브젝트를 화면 중앙에 고정 한 뒤, 플레이어 오브젝트가 이동하는 방향과 속도 만큼 타일 오브젝트는 반대로 움직이게 하고, 타일의 x y 좌표는 플레이어가 이동하는 방향대로 조정해주는 방식을 택했습니다. 이를 통해 **마치 무한이 맵이 이어진 것과 같은 효과**를 얻을 수 있었습니다.

```js
// camera가 가는 곳으로 background가 따라 움직이도록 해줍니다.
this.m_background.setX(this.m_player.x - config.width / 2);
this.m_background.setY(this.m_player.y - config.height / 2);

// tilePosition을 player가 움직이는 만큼 이동시켜 마치 무한 맵인 것처럼 나타내 줍니다.
this.m_background.tilePositionX = this.m_player.x - config.width / 2;
this.m_background.tilePositionY = this.m_player.y - config.height / 2;
```

<br>

<img width="100%" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/35516ae2-1666-4f2c-96de-8357edf04083"/>

<br>

결과적으로 하나의 맵 에셋만을 사용하여 무한히 존재하는 듯 착시를 일으키는 매커니즘을 완성 할 수 있었고, 이러한 방법이 가장 리소스 관리 측면에서 효율적이면서 제가 초기에 기획한 게임의 의도와 가장 잘 맞는 방법이었다고 생각합니다.

### 3. 몬스터 스폰 위치 정하기

**스폰** 이란, **몬스터가 등장하는 이벤트**를 의미 합니다. 제가 기획한 게임은 사방에서 몰려오는 몬스터들을 피해가며 최대한 오래 살아남는 게임이기에, **유저 경험 및 게임의 난이도** 측면에서 몬스터의 스폰 위치를 정하는 것은 매우 중요한 의사결정 중 하나 였습니다.

#### 3.1 몬스터는 어느 장소에서 스폰해야 할까?

---

만약 몬스터의 스폰위치가 **플레이어와 너무 가깝다면** 몬스터를 인지하고 도망가기 위해 필요한 반응 시간이 짧아지기에 **게임의 난이도가 너무 어려워지고**, 또한 **몬스터 스폰 위치가 플레이어의 이동 경로 바로 앞에 있다**면 이동중에 갑자기 등장한 몬스터에 의해 피격당하는 일이 잦아지고, **플레이 경험을 크게 해칠 것**이라고 생각 했습니다. 반대로 **몬스터 스폰 위치가 너무 멀다면**, 몬스터로부터 도망갈 시간이 너무 길어져서 **게임의 난이도가 너무 쉬워질 것** 이라고 판단하였습니다. 각 방법들에 대해 비교 해 보겠습니다.

#### 3.2 정해진 위치 vs 완전 랜덤 위치 vs 일정 거리 이상 랜덤 위치

---

##### 3.2.1 **고정된 위치**

첫번째로 생각해본 방식은 **고정된 위치에서 몬스터가 스폰** 되도록 하는 방식 입니다. 하지만 이러한 방식은 몬스터의 스폰 위치를 유저가 알게 된다면, **게임 난이도를 매우 낮추고, 반복적 플레이에 대한 유저의 흥미를 전혀 이끌어내지 못 할 것**이라고 생각 했기에 다른 방법을 고안해 봤습니다.
<br>

   <img width="873" alt="스크린샷 2024-05-22 오후 6 41 36" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/d5db7e54-9809-4b5f-ab0e-464c6bdacc99">

##### 3.2.2 **완전 랜덤 위치**

두번째로 생각해본 방식은, **완전히 랜덤한 x,y 좌표에서 몬스터가 스폰** 되도록 하는 방법 이었습니다. 몬스터 스폰 로직에 랜덤한 x,y 좌표를 입력만 하면 되기 때문에 이 방식 또한 어렵지 않았습니다. 하지만, 완전히 랜덤한 위치에서 몬스터가 스폰을 하다보니 플레이어로부터 매우 멀리, 혹은 매우 가까이 몬스터가 스폰되는 경우가 발생 하였습니다. 두 케이스 모두 플레이 경험을 매우 해치는 상황이기에 다음 방법을 생각 했습니다.
<br>

   <img width="873" alt="스크린샷 2024-05-22 오후 6 44 39" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/1fc48c40-bc66-4f83-b792-f2f2f4b717ad">

##### 3.2.3 **일정 거리 이상 랜덤 위치**

마지막으로 제가 생각한 방법은, **플레이어로부터 일정 거리 이상에서 몬스터가 등장하는 방식**을 고안하게 됐습니다. 이 방법은 플레이어가 어느방향으로 얼만큼 이동햇는지와 상관 없이, **몬스터가 스폰되는 시점에 플레이어의 위치에 따라 몬스터 스폰이 결정**되기 때문에 갑자기 생성되는 몬스터로 인해 겪는 불합리함을 없앨 수 있기 때문에 합리적인 방법이라고 선택했습니다.
<br>

<img width="873" alt="스크린샷 2024-05-15 오후 7 38 58" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/693be136-00eb-471a-a8bb-fe2ae2d1d483">

#### 3.3 일정 거리 랜덤 위치 -> 유저 플레이 경험까지 고려해보자!

---

그렇다면 플레이어로부터 얼만큼의 거리를 둬야하는지에 대해서 생각해보았을 때, **플레이어 기준, 유저의 뷰포트 꼭지점까지의 거리를 반지름으로 두고**, 그 반지름의 거리에서 몬스터가 등장하면 유저가 보기에는 화면 바깥에서 생성된 몹이 나를 향해 다가오는 것 처럼 느껴지고, 적당한 시간에 플레이어에게 도달할 속도를 설정하였습니다.
<br>

<img width="100%" src="https://github.com/Team-Office360/NeedleInHaystack-client/assets/102589090/7d3970e3-146c-458b-8cc3-88a8b7bfddbb"/>

<br>

이번 챌린지는 성능적인 측면이나 개발 난이도적인 측면 보다는 **어떤 방식이 가장 게임답게 유저 경험을 극대화 시킬 수 있는 방법인지**에 대해 고민해본 챌린지였습니다. 결과적으로 유저는 몬스터가 갑자기 등장하는 것이 아닌 맵 밖의 미지의 공간에서 부터 나를 향해 다가오는듯한 느낌을 잘 살리게 됐다고 생각합니다.

## 📚 What i learned

#### 1. 추가 기능 기획

제한된 시간내에 프로젝트를 완성해야 했기에 아이디어 도출 당시 생각 했던 기능들이 많이 있지만 다 구현하지 못해 아쉬운 점 또한 존재했습니다. 추가적으로 구현하면 더 풍성한 게임이 될 수 있을 기능들에 대해 설명해보겠습니다.

##### 1.1 보다 다양한 적 유형

현재 제 프로젝트의 몬스터는 텍스쳐, 속도, 체력, 공격력 등 정적인 요소에서만 차이가 있습니다. 이를 제가 구현한 무기들의 동작방식이 다 다른 것 처럼, 몬스터 또한 **더 다양한 행동 방식**에 대해 로직을 세우고 **새로운 공격 유형의 몬스터**들을 개발 할 예정입니다.

##### 1.2 무기 융합 기능

개별 무기들이 최대 레벨에 도달하면, 그 이상의 효과는 존재하지 않습니다. 이를 유저에게 조금 더 다양한 게임 경험을 주기 위해, **특정 무기 2개가 최대 레벨에 도달한다면 두 무기를 하나의 업그레이드 된 새로운 무기로 융합하는 기능**을 개발 할 예정입니다.

##### 1.3 실시간 멀티 플레이 게임

제 게임은 로컬 환경에서 혼자 플레이 할 수 있는 싱글 게임입니다. 이를 단지 서버가 기록을 경쟁 할 수 있는 기능 외에, **실시간으로 두 명의 유저가 함께 플레이 할 수 있는 멀티 플레이 게임**으로 리팩토링 할 예정입니다. 이는 꼭 처음부터 구현 하고 싶었던 기능이었습니다만, 하나의 캔버스 상에서 실시간으로 변경되는 매우 많은 수의 오브젝트들의 좌표, 오브젝트의 상태(존재, 파괴, 이동 방향)등을 두 명의 유저가 서로 교환한다는 것은 생각보다 매우 어려운 작업이었습니다. 실시간 멀티 플레이 게임으로의 업그레이드를 위해 네트워크 프로토콜(TCP/UDP), Web Socket 등 필요한 지식을 습득 한 뒤 개발 할 예정입니다.

#### 2. 회고

프로젝트를 진행하며 처음 접해보는 기술을 사용했기 때문에 이런저런 어려움을 많이 겪었지만 굉장히 재미있었던 프로젝트 였습니다. 정말 막연하게 생각만 하고 있던 '게임' 이라는 크고 추상적인 문제 또한 논리적 사고를 통해 작은 문제들로 나누고, 프로그래밍적으로 표현하는 것이라는 점에서 다시 한번 논리적 사고의 중요성에 대해 생각하는 계기가 되었습니다. 이를 통해서 앞으로 어떤 도전을 하게 되던지 논리적으로 문제를 쪼갤 수 있는 영감을 많이 얻게 됐습니다.

<br>

## ⏰ Project timeline

프로젝트는 **칸반 방식**을 채택하였으며 모든 개발 주기는 다음과 같은 프로세스를 따랐습니다

1. 문제 정의
2. POC(Proof Of Concept) 진행
3. 해결 방법 비교
4. 해결 방법 선정
5. 실행
6. 회고

👉🏻[프로젝트 계획 노션 링크](https://brainy-yak-3e0.notion.site/SURVIVOR-6bfd0150d6634bad8a96d4b3a0d0ed3e?pvs=74)

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
