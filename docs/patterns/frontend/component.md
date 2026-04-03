# Component

## Layering Strategy

작성자는 컴포넌트 설계 시 과도한 추상화보다 실용적인 계층 구조를 지향한다.

* **Practical Layers** <Badge type="tip" text="Standard" /> : 본격적으로 디자인 시스템을 구축하는 것이 아니라면,<br/>원자(Atomic) -> 조합(Composition) -> 페이지(Page)의 3단계 구성을 기본으로 한다.<br/>UI가 복잡하지 않은 프론트엔드에서 Composition은 UI 블록 정도의 역할을 맡지만 calendar 같은 컴포넌트라면 내부 상태를 가질 수 있다.
* **Headless Pattern**: UI 교체 가능성이 높거나, UI와 로직을 분리해야 하는 경우 로직과 표현을 분리하는 헤드리스 컴포넌트를 설계한다.

## Abstraction Boundary

명확한 수치보다, 이 UI를 추상화했을 때 코드가 얼마나 줄고 개발 효율이 얼마나 올라가는지로 판단한다.

* **Efficiency First** <Badge type="tip" text="Trade-off" /> : 추상화의 목적은 재사용 그 자체보다 코드 감소와 개발 효율의 향상에 있다. 추상화했을 때 실질적인 이득이 없다면 굳이 올리지 않는다.
* **Props Complexity** <Badge type="info" text="Clarity" /> : props가 복잡해진다는 사실 자체를 추상화 판단 기준으로 보지 않는다. 추상화를 잘 했다면 props도 함께 정리된다고 본다.
