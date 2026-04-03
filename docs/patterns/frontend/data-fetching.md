# Data Fetching

이 문서는 React 환경 기준으로 작성한다.

## Server State Management

서버 데이터를 클라이언트의 전역 상태와 분리하여 관리한다.

* **React Query** <Badge type="tip" text="Declarative" /> : 서버 상태와 클라이언트 상태를 분리하기 위해 TanStack Query를 사용한다. SWR보다 이 구분이 더 분명하다고 본다.
* **Separation of Concerns**: fetching한 데이터를 클라이언트 전역 상태로 취급하기보다 별도의 서버 상태로 간주하여 데이터의 신뢰성을 유지한다.

## Client State Boundary

서버 응답을 전역 클라이언트 상태에 그대로 복사하지 않는다.

* **No Response Copy** <Badge type="warning" text="Zustand" /> : 서버 응답을 Zustand에 그대로 복사하면 서버 상태와 클라이언트 상태의 경계가 흐려진다고 본다.
* **Transform** <Badge type="info" text="Client State" /> : 전역 데이터가 필요하더라도, 서버 데이터를 현재 클라이언트 상태에 맞는 형태로 변환해서 다룬다. 다만 이런 경우는 많지 않으며 특수한 경우, 더 나아가 BFF가 필요한 경우도 있다.
