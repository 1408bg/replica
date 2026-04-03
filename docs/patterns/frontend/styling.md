# Styling

## Definition Location

스타일 정의와 컴포넌트 로직의 물리적 위치를 관리한다.

* **Bottom Placement** <Badge type="tip" text="Colocation" /> : @emotion/styled를 사용할 때 스타일 정의 코드는 해당 컴포넌트 파일의 하단에 배치한다. 별도의 파일로 분리하지 않고 한 파일 내에서 전체 구조를 파악할 수 있도록 한다.

## Theme Management

토큰 구조는 디자인의 계층을 따른다.

* **Follow Design Tokens** <Badge type="tip" text="Hierarchy" /> : 디자인 시스템이 있다면 색상, 간격, 타이포그래피 토큰의 계층을 그대로 따른다. 임의로 다른 의미 체계로 다시 나누지 않는다.
* **Semantic Tokens** <Badge type="info" text="Optional" /> : 디자인 토큰 체계가 없거나 의미 단위의 관리가 필요한 경우에만 semantic token을 둔다.
* **Complexity-Based Choice**: 토큰 구조는 디자인의 복잡도에 따라 결정한다.

## Scaling Strategy

스타일과 컴포넌트 규모가 커지면 공통 요소를 별도 단위로 분리한다.

* **Design System / UI Package** <Badge type="info" text="Scale" /> : 스타일 코드가 길어지거나 규모가 커지면 design-system이나 ui 패키지를 따로 만들고, 공통 컴포넌트를 그 안에서 정의한다.
