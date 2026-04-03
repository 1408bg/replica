# Schema

## Deletion Policy

데이터의 성격과 비즈니스 요구사항에 따라 삭제 방식을 결정한다.

* **Contextual Choice** <Badge type="tip" text="Flexible" /> : 계정 복구와 같이 데이터 보존이 필요한 경우에는 Soft Delete를 적용한다. 그 외의 경우에는 물리적으로 데이터를 삭제하는 Hard Delete를 선택한다.
* **deleted_at** <Badge type="info" text="Soft Delete" /> : Soft Delete를 적용하는 경우에는 `deleted_at` 컬럼을 사용한다.

## Relationships

데이터의 무결성과 정규화를 보장한다.

* **Schema Enforcement** <Badge type="info" text="Integrity" /> : 테이블 간의 관계(Foreign Key)는 데이터베이스 스키마 수준에서 엄격히 강제한다. 어플리케이션 로직에만 의존하지 않고 시스템 계층에서 정규화된 구조를 유지한다.
