---
layout: home

hero:
  name: Replica
  tagline: 모방 개발을 위한 지침서
  actions:
    - theme: brand
      text: 페르소나 주입하기
      link: /persona/
    - theme: alt
      text: 기술 스택 보기
      link: /stack/

features:
  - icon: 🎭
    title: Persona
    details: Agent가 모방을 위해 가져야 하는 컨텍스트
    link: /persona/
  - icon: 🧭
    title: Philosophy
    details: 기술 선택의 판단 기준과, 절대 하지 않는 것들
    link: /philosophy/
  - icon: 🧱
    title: Stack
    details: 선호 라이브러리와 이유, 대안을 선택하는 조건
    link: /stack/
  - icon: 📐
    title: Conventions
    details: 네이밍, 타입 작성, 폴더 구조, 커밋 메시지 규칙
    link: /conventions/
  - icon: 🧩
    title: Patterns
    details: 컴포넌트 설계, 상태 관리, API 호출, 에러 처리 방식
    link: /patterns/
  - icon: 🤖
    title: AI Workflow
    details: AI를 쓰는 맥락, 프롬프트 패턴, 코드 리뷰 방식
    link: /ai-workflow/
---

<br/>
<br/>

# Replica

::: tip Overview
Replica는 소프트웨어 개발자인 작성자의 개발 방식을 독자가 읽고 모방할 수 있도록 정의한 지침서이다.
:::

## Meta

소개나 기술 스택 공유가 아닌, **산출물을 도출하는 과정**의 기록에 집중한다. 이를 위해 다음의 내용을 포함한다.

* **의사결정 근거**: 특정 구조나 라이브러리를 선택하는 논리적 배경 (Why)
* **행동 원칙**: 개발 과정에서 지향하는 사항과 지양하는 사항의 명시 (Do & Don't)
* **방법론**: 아이디어가 실제 소프트웨어로 구체화되는 절차의 모방 보조

## Target Audience

Replica의 독자층은 목적에 따라 세 가지 범주로 구분된다.

* **Agent** <Badge type="tip" text="Autonomous" /> : 본 지침서를 탐색하여 작성자의 사고 방식을 학습하고, 이를 바탕으로 작업을 대행하거나 보조한다.
* **Developer** <Badge type="info" text="Reference" /> : 작성자의 개발 방법론을 참고하여 자신의 프로젝트에 적용하거나 기술적 통찰을 얻는다.
* **General** <Badge type="warning" text="Interest" /> : 소프트웨어 개발 프로세스 전반에 대한 흥미 또는 관찰을 목적으로 내용을 열람한다.

## How to use

Replica는 필요한 지점에서 찾아보는 참조 문서이다. 다만 처음 읽는 경우에는 목적에 따라 다음 순서로 접근하는 편이 좋다.

### Agent

Agent는 먼저 [Persona](/persona/)를 읽고 작성자의 우선순위와 판단 기준을 주입받는다. 그다음 [Philosophy](/philosophy/)에서 의사결정 기준과 금지 사항을 확인하고, [Stack](/stack/)과 [Conventions](/conventions/)로 기술 선택과 코드 작성 규칙을 맞춘다. 구현 단계에서는 [Patterns](/patterns/)를 기준으로 구조를 잡고, AI와 협업하는 방식이 필요할 때 [AI Workflow](/ai-workflow/)를 참고한다.

### Developer

작성자의 생각과 선택 이유가 궁금하다면 [Philosophy](/philosophy/)와 [Stack](/stack/)부터 읽는 편이 좋다. 실제 코드 작성 규칙이 필요하다면 [Conventions](/conventions/)를, 구현 방식의 습관과 구조가 궁금하다면 [Patterns](/patterns/)를 읽는다. AI를 작업 보조로 활용하고 있다면 [AI Workflow](/ai-workflow/)까지 이어서 보면 된다.

### General

전체 성격만 빠르게 파악하려면 [Persona](/persona/), [Philosophy](/philosophy/), [Stack](/stack/) 순서로 읽으면 충분하다. 세부 규칙과 구현 방식은 필요할 때 뒤에서 찾아보면 된다.

::: tip Suggestion
읽는 순서는 고정 규칙이 아니다. 현재 막혀 있는 문제에 맞는 섹션부터 먼저 읽어도 된다.
:::
