# Error Handling

## Error Response Strategy

에러의 성격에 따라 명확한 응답 전략을 가진다.

* **Internal Errors** <Badge type="danger" text="500" /> : 비의도적 내부 오류는 500으로 처리한다. 리소스 정리는 라우터 함수가 아닌 해당 계층 수준에서 이미 완료된 상태여야 한다.
* **Business Errors** <Badge type="info" text="Meaning" /> : 의도된 예외는 비즈니스 로직에 맞는 의미의 상태 코드로 처리한다.
* **Global Middleware**: 전역 미들웨어는 단순한 로그 기록보다 Sentry와 같은 외부 도구를 활용한 모니터링 목적으로 주로 활용한다. 일반적인 로그는 프레임워크 단계에서 처리하는 방식을 선호한다.

## Error Exposure

클라이언트에 어떤 정보를 노출할지는 합의 여부에 따라 결정한다.

* **Status Code First** <Badge type="tip" text="Default" /> : 클라이언트와 오류 메시지 제공에 대한 합의가 없다면 상태 코드로만 알린다.
* **Optional Message** <Badge type="info" text="Agreed" /> : 클라이언트와 합의가 있다면 오류 메시지를 함께 제공한다.

## Internal Error Model

내부에서는 도메인 예외를 정의해 두고 생성해서 사용한다.

* **Domain Exception Factory** <Badge type="tip" text="Factory" /> : 도메인 예외를 미리 정의해 두고 팩토리 형식으로 생성하는 방식을 주로 사용한다.

## Examples

이메일 중복, 권한 부족, 리소스 없음처럼 의도된 예외는 비즈니스 의미가 드러나는 상태 코드로 처리한다. 반대로 예상하지 못한 예외는 로그와 모니터링을 남긴 뒤 500으로 통일한다.

```http
HTTP/1.1 409 Conflict
Content-Type: application/json

{
  "message": "email already exists"
}
```

클라이언트와 메시지 제공을 합의하지 않았다면 상태 코드만으로 알리는 쪽을 기본으로 둔다.

```http
HTTP/1.1 404 Not Found
```

내부에서는 도메인 예외를 미리 만들어 두고 필요할 때 생성해 쓰는 방식을 선호한다.

```ts
const UserErrors = {
  emailAlreadyExists: () => new DomainException(409, "email already exists"),
  userNotFound: () => new DomainException(404, "user not found"),
};
```
