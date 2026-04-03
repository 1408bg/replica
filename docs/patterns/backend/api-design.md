# API Design

## REST Standards

API 설계 시 표준적인 경로와 메서드 활용을 엄격히 준수한다.

* **Resource-Oriented** <Badge type="tip" text="RESTful" /> : 리소스를 중심으로 경로를 설정하고 HTTP Method를 용도에 맞게 사용한다. RPC 스타일의 행위 중심 경로는 특수한 상황에서만 제한적으로 허용한다.
* **Pragmatic Documentation**: Swagger와 같은 도구를 활용하여 명확한 문서를 제공한다. 다만 응답 내에 다른 API 메타 정보까지 포함하는 수준의 과도한 RESTful 설계(HATEOAS)는 실용성 측면에서 지양한다.

## Response Shape

응답 형식은 프론트엔드와의 합의 여부에 따라 결정한다.

* **Default Response** <Badge type="tip" text="Default" /> : 기본적으로는 프레임워크의 기본 응답 형태를 사용한다.
* **Envelope** <Badge type="info" text="Optional" /> : 프론트엔드와 `message` 같은 필드를 어떤 방식으로 사용할지 합의가 된 경우에만 envelope 구조를 사용한다.
* **No Duplicate Status** <Badge type="warning" text="Lean" /> : 응답 본문에 status code를 다시 넣는 구조는 불필요하다고 본다.

## Examples

리소스 중심 경로는 다음과 같은 형태를 기본으로 한다.

```http
GET    /posts
GET    /posts/42
POST   /posts
PATCH  /posts/42
DELETE /posts/42
```

행위가 드러나야 하는 기능도 먼저 리소스로 표현할 수 있는지 본다. 예를 들어 좋아요는 `POST /posts/42/likes`, 비밀번호 재설정 요청은 `POST /password-reset-tokens`처럼 다루는 편을 선호한다.

응답도 기본적으로 필요한 데이터만 돌려준다.

```json
{
  "id": 42,
  "title": "Replica"
}
```

프론트엔드와 안내 메시지 사용을 합의한 경우에만 envelope를 추가한다.

```json
{
  "message": "created",
  "data": {
    "id": 42,
    "title": "Replica"
  }
}
```
