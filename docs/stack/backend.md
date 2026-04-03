# Backend

## Runtime and Framework

백엔드는 기본적인 복잡도를 처리해야 하므로 생산성과 안정성을 우선하여 도구를 선택한다.

* **FastAPI** <Badge type="tip" text="Python" /> : Python의 간결함에 Pydantic으로 타입 안정성을 더할 수 있어 선택한다. OpenAPI를 자동 생성할 수 있고, 필요한 생태계도 충분하다고 본다.
* **NestJS** <Badge type="info" text="Framework" /> : 안정적인 설계와 풍부한 생태계가 필요한 경우 도입한다. Node.js LTS 환경을 사용한다.
* **Express** <Badge type="warning" text="Experimental" /> : 가볍고 작은 서버가 필요하거나, 새로운 아키텍처 및 패턴을 검증할 때 사용한다.
* **Elysia** <Badge type="danger" text="Bun-only" /> : Bun 런타임의 성능이 필요하고 의존성들이 Bun 환경에서 호환될 때 사용한다.

## Database

관계형 데이터베이스(SQL)를 선호한다.<br/>
규모가 작으면 SQLite를 우선 검토하고, 그 외에는 익숙한 MySQL을 사용한다.<br/>
이후 대규모 데이터 처리량이나 속도 개선이 필요해지면 MariaDB로 전환하는 쪽을 검토한다.

* **SQLite** <Badge type="tip" text="Light" /> : 규모가 크지 않은 프로젝트에서 우선 검토한다. 가볍고 관리가 용이한 점을 가치 있게 여긴다.
* **MySQL**: 별도 이유가 없다면 익숙한 MySQL을 우선 사용한다.
* **MariaDB**: MySQL을 사용하던 환경에서 대규모 데이터 처리량이나 속도 개선이 필요할 때 전환을 검토한다.
* **Redis**: 인메모리 데이터 저장이 필요한 경우에만 제한적으로 사용한다.

## ORM

프레임워크의 특성에 맞는 도구를 선택하여 데이터를 제어한다.

* **SQLModel**: FastAPI 환경에서 주로 사용한다.
* **TypeORM**: NestJS 환경에서 주로 사용한다.
* **Query Control** <Badge type="info" text="SQL" /> : 복잡한 조회나 성능 최적화가 필요한 구간에서는 쿼리 수준의 제어를 고려한다.
