# Structure

## Colocation

연관된 파일들을 가깝게 배치하여 관리한다.

* **Components** <Badge type="tip" text="Unified" /> : 컴포넌트 파일과 그에 종속된 스타일, 테스트 파일을 같은 디렉토리에 배치할 수 있다. 다만 colocation을 기본 규칙처럼 두기보다, 실제로 함께 수정되고 함께 움직이는 단위일 때 적용한다.

## Export Patterns

모듈의 외부 노출 방식을 일관되게 유지한다.

* **Index Export** <Badge type="info" text="Barrel" /> : 외부로 노출되는 요소가 있는 디렉토리에서는 `index.ts` 파일을 두어 관리한다. 아무것도 노출하지 않는 internal 모듈이라면 굳이 둘 필요는 없다.
* **Inline Named Export**: `export default`보다 선언과 동시에 명명된 형태로 내보내는 방식을 선호한다.
