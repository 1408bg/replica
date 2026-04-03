# Frontend

## Framework

작성자는 프론트엔드 프레임워크를 먼저 정해 두지 않는다.<br/>
소프트웨어의 규모와 개발 환경에 따라 선택한다.

* **React** <Badge type="info" text="Ecosystem" /> : 대중적인 협업 환경이 필요하거나, React Flow와 Recharts처럼 React 생태계의 기능이 필수적인 경우에 선택한다.
* **HTML / CSS / Vanilla JS**: 규모가 크지 않은 경우 우선적으로 검토한다.
* **Vite + Vanilla TS**: 바닐라 기반으로 구현하되 타입 안정성과 개발 편의가 필요한 경우에 선택한다.
HTML / CSS / Vanilla JS 또는 Vite + Vanilla TS를 선택한다는 것은 선언형 UI 프레임워크 없이 명령형으로 UI를 조작하겠다는 뜻에 가깝다.<br/>
UI가 빈번하게 변경되지 않거나 선언형으로 관리하는 편이 오히려 복잡한 경우에 이 경로를 택한다. Three.js나 TensorFlow.js처럼 특정 구현 로직이 중심인 작업도 여기에 가깝다.

::: tip Example
관리 화면처럼 상호작용이 많고 React 생태계 패키지가 직접 필요하다면 React를 선택한다. 소개 페이지, 간단한 계산 도구, 캔버스 중심 인터랙션처럼 DOM 구조보다 구현 로직이 중심이면 HTML / CSS / Vanilla JS 또는 Vite + Vanilla TS를 먼저 검토한다.
:::

## Styling

프로젝트의 요구사항과 환경에 따라 적절한 스타일링 방식을 선택한다.

* **@emotion/styled** <Badge type="tip" text="Main" /> : 세밀한 제어와 명확한 스타일링을 위해 선택한다. CSS in JS로서 컴포넌트 단위의 scoped CSS를 상대적으로 가볍게 사용할 수 있고, props에 접근해야 하는 경우에도 유용하다.
* **Tailwind CSS** <Badge type="warning" text="Utility" /> : 별도의 디자인 시스템이 없거나 평면적인 디자인을 적용할 때 사용한다. v0와 같은 AI 도구로 프로토타이핑을 하는 경우에도 선택한다.
* **Vanilla CSS**: 바닐라 JS나 TS를 사용하는 환경에서 기본적으로 사용한다.

::: tip Example
컴포넌트별 조건부 스타일과 props 기반 제어가 많다면 `@emotion/styled`를 선택한다. 빠르게 화면을 붙이고 디자인 시스템이 아직 약하다면 Tailwind CSS를 사용한다. 바닐라 환경에서는 별도 이유가 없는 한 Vanilla CSS를 기본값으로 둔다.
:::

## State Management

상태의 복잡도와 관리 범위에 따라 도구를 선택한다.

* **useState**: 로컬 상태로 충분한 경우 기본적으로 사용한다.
* **Custom Hook**: 로직이 복잡한 경우 직접 설계하여 처리한다.
* **Zustand** <Badge type="tip" text="Global" /> : 전역 상태가 필요하거나 여러 개의 전역 상태를 동시에 관리해야 하는 상황에서 도입한다.

::: tip Example
모달 열림, 탭 전환, 입력값처럼 한 컴포넌트 안에서 닫히는 상태는 `useState`로 충분하다. 폼 흐름, 검색 조건 조합, 비동기 전환처럼 화면 내부 로직이 길어지면 Custom Hook으로 분리한다. 헤더, 필터, 레이아웃처럼 여러 화면에서 함께 읽는 상태가 생길 때만 Zustand를 검토한다.
:::
