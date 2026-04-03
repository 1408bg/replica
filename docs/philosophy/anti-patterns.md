# Anti-patterns

이 문서는 작성자가 코드와 구조에서 반복적으로 금지하는 요소를 정리한다.<br/>
아래 항목은 취향 차이가 아니라 유지보수 비용과 신뢰도를 직접 해치는 문제로 본다.

## Technical Taboos

작성자는 코드가 읽히지 않거나 동작을 신뢰하기 어려워지는 상태를 금지한다.

* **의미 없는 시그니처** <Badge type="danger" text="Dead-Code" /> : 구현되지 않은 빈 함수나 동작하지 않는 상호작용 요소를 남겨 두는 것을 금지한다. 기능을 구현하거나, 구현하지 않을 것이라면 해당 시그니처 자체를 제거한다.
* **매직 넘버** <Badge type="danger" text="Hard-Coded" /> : 로직에 영향을 주는 리터럴 값을 직접 사용하는 것을 금지한다. 설정값은 상수로 선언하여 파일 상단 또는 별도 파일로 관리한다.
* **의미 없는 주석** <Badge type="danger" text="Useless-Comment" /> : 코드가 이미 설명하는 내용을 다시 적는 주석을 금지한다. 복잡한 정규식이나 특이 사항이 있는 경우에만 간결하게 주석을 작성한다.
* **일관적이지 않은 스타일** <Badge type="danger" text="Inconsistency" /> : 함수 표현식과 선언식 중 하나를 선택했다면 소프트웨어 전 범위에서 유지한다. 파일마다 표현 방식이 달라지는 것을 금지한다.
* **표준을 벗어난 네이밍** <Badge type="danger" text="Naming" /> : 언어별 표준 컨벤션을 벗어난 네이밍을 금지한다. 컴포넌트는 PascalCase, URL은 kebab-case, 상수는 UPPER_SNAKE_CASE를 사용한다.

## Architectural Taboos

작성자는 구조의 경계가 흐려지는 상태를 금지한다.

* **불명확한 계층 분리** <Badge type="danger" text="Hierarchy" /> : 디렉토리로 구분된 계층 간의 참조 관계는 명확해야 한다. 계층을 건너뛰는 참조, 역할이 섞인 구조, 접근 범위가 흐려지는 설계를 금지한다.
* **신(God) 요소의 탄생** <Badge type="danger" text="God-Object" /> : 하나의 파일, 객체, 함수가 수백 라인을 넘어가며 과도한 책임을 가지는 것을 금지한다.
