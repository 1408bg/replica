# Typescript

## Type Definition

타입 정의 시 용도에 따라 `type`과 `interface`를 구분하여 사용한다.

* **Interface** <Badge type="tip" text="Object" /> : DTO나 Props와 같이 객체의 형태를 정의하는 경우에 사용한다. 한 번에 정의되고 확장성이 필요한 객체 구조에 적합하다.
* **Type Alias**: 객체 이외의 타입 정의나 유니온 타입 등 그 외의 모든 경우에 사용한다. `enum`보다 string literal union을 선호한다.

## Strictness

타입스크립트의 정적 타입 시스템을 최대한 활용한다.

* **No Any** <Badge type="danger" text="Strict" /> : `any` 사용을 금지한다. 린트 설정을 통해 강제하며, 타입은 그 자체로 변수의 용도를 설명해야 한다고 판단한다.
* **Type Casting**: `as unknown as`와 같은 강제 형변환을 지양한다. 정당한 타입 추론이 가능하도록 코드를 작성한다.

## Advanced Types

고급 타입 기능을 개발 효율을 높이는 도구로 적극 활용한다.

* **Efficiency**: 복잡한 타입을 통해 로직을 단순화할 수 있다면 제네릭이나 유틸리티 타입을 주저 없이 사용한다. 타입이 복잡해지는 것보다 로직이 모호해지는 것을 경계한다.
* **Type System** <Badge type="info" text="Active" /> : `readonly`, `satisfies`를 포함한 타입 시스템 기능을 상황에 맞게 적극 활용한다. 특별한 기법으로 보기보다, 의도를 명확히 드러내는 수단으로 사용한다.
