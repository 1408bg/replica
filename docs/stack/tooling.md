# Tooling

## Package Manager

작성자는 성능과 개발 경험을 고려하여 패키지 관리자를 선택한다.

* **Bun** <Badge type="tip" text="Preferred" /> : 사용할 수 있다면 선호한다. 성능을 중요하게 볼 때 선택하며, Bun의 특징을 최대한 활용하는 환경과 함께 사용한다.
* **Yarn**: 안정적이고 대부분의 경우에 적용 가능하므로 실질적으로 가장 자주 사용하는 선택지이다.
* **Pip** <Badge type="info" text="Python" /> : Python 환경에서 패키지를 관리할 때 사용한다.

## Lint and Format

작성자는 코드의 일관성을 확보하고 문법 규칙을 준수하기 위해 관련 도구를 사용한다.

* **ESLint / Prettier** <Badge type="tip" text="JS/TS" /> : JavaScript와 TypeScript 환경의 기본 검증 도구이다.
* **Standard Syntax** <Badge type="info" text="Python" /> : Python 환경에서는 언어 고유의 문법 규칙을 충실히 따른다.

## Test

여러 단계에 걸친 흐름이나 복잡한 비즈니스 로직을 검증할 때 테스트를 사용한다.<br/>
구현을 그대로 따라 쓰는 mirror test에는 우선순위를 두지 않는다.

* **bun:test / Vitest** <Badge type="tip" text="Flow" /> : 여러 단계의 흐름이나 복잡한 비즈니스 로직을 검증할 때 사용한다.
* **Playwright** <Badge type="warning" text="Frontend" /> : 프론트엔드는 단위 테스트가 대부분 단순한 형태로 끝난다고 보기 때문에 E2E 테스트를 우선한다.
* **Mocking** <Badge type="info" text="Structure" /> : 코드를 유지보수 가능하게 정리했다면 테스트 가능한 정도의 추상화는 이미 갖춰져 있다고 본다. 테스트와 모킹을 이유로 구조를 따로 꾸미지는 않는다.
