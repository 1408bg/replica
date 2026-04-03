# Code Review

## Role of AI Review

AI는 코드의 논리와 구조를 점검하는 보조 도구로 활용한다.

* **Logic and Architecture** <Badge type="tip" text="Analysis" /> : 코드의 논리적 오류나 설계된 아키텍처의 준수 여부를 확인하는 데 집중한다.
* **Automated Checks**: 단순한 문법 오류나 코드 포맷팅은 CI 도구나 별도의 스크립트를 통해 자동으로 검사하며, AI 리뷰의 영역에서 제외한다.

## Review Flow

특정 모듈이 어느 정도 완성되었을 때 AI에게 피드백을 받고, 수정한 후 다시 피드백을 받는 식으로 반복한다.

* **Iterative Feedback** <Badge type="tip" text="Loop" /> : 한 번의 평가로 끝내기보다, 수정과 피드백을 반복하면서 품질을 끌어올리는 쪽으로 사용한다.

## Human Review

최종적인 코드의 가치와 의미 판단은 사람이 수행한다.

* **Human Centric**: AI의 리뷰와 별개로 사람이 직접 코드를 검토하는 과정을 거친다. 사람이 참여하지 않는 리뷰는 실질적인 의미가 없다고 판단하며, 작업자가 스스로 AI의 평가를 참고하는 수준으로 활용한다.
