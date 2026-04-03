# State

## State and Actions

상태와 이를 변경하는 로직을 가깝게 배치하여 응집도를 높인다.

* **Integrated Logic** <Badge type="tip" text="Cohesion" /> : Zustand의 `create` 함수나 Custom Hook 내부에 상태와 업데이트 로직(Actions)을 함께 정의한다. 상태와 상태 변경이 한 곳에서 관리되는 구조를 선호한다.

## Derived State

파생 상태가 필요한 경우에도 상태를 별도의 계층처럼 다루기보다, 사용하는 도구의 구조에 맞춰 처리한다.

* **Jotai** <Badge type="info" text="Bottom-Up" /> : 파생 상태를 bottom-up 구조로 다뤄야 할 때 검토한다.
* **Zustand**: Zustand를 사용하는 경우에는 별도의 derived state를 정의하기보다, 이미 정의된 상태를 바탕으로 필요한 값을 연산하는 방식을 선호한다.

## Optimization

불필요한 리렌더링을 방지하기 위해 구조적인 접근을 취한다.

* **Component Splitting** <Badge type="info" text="Performance" /> : 복잡한 Selector를 구현하기보다, 특정 상태를 사용하는 컴포넌트를 최소 단위로 분리한다. 상태 변화의 영향을 받는 범위를 물리적으로 제한하여 렌더링 효율을 확보한다.
