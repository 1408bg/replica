# Naming

별도 규칙이 없다면 언어와 플랫폼의 표준 컨벤션을 따른다.

## Booleans

불리언 변수나 함수의 이름은 명확하게 정의한다.

* **Prefix** <Badge type="tip" text="Boolean" /> : `is`, `has`, `can` 등을 주로 사용하여 상태를 명시한다. 다만 이러한 접두사가 없더라도 용도가 명확하다면 허용한다.

<CodeComparison />

## Event Handlers

이벤트를 처리하는 상황에 따라 핸들러 이름을 구분한다.

* **On Prefix**: 이벤트를 받아들이는 외부 인터페이스(Props)에 사용한다. (예: `onClick`)
* **Handle Prefix**: 이벤트를 실제로 소비하고 로직을 처리하는 함수에 사용한다. (예: `handleClick`)

## Private Members

멤버 변수나 함수의 접근 범위를 명확히 관리한다.

* **No Underscore** <Badge type="danger" text="Clean" /> : 클래스나 모듈 내부에서만 사용되는 요소에 `_` 접두사를 붙이지 않는다. 타입스크립트의 `private` 접근 제한자를 활용하거나 모듈 스코프를 통해 외부 노출을 제한한다.

## Static Files

정적 파일로 들어가는 파일명은 URL 표준에 맞추어 작성한다.

* **Kebab Case** <Badge type="info" text="URL" /> : URL에 직접 드러나는 파일명은 kebab-case를 사용한다.
