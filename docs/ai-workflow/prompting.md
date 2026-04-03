# Prompting

## Prompting Strategy

AI에게 작업의 맥락과 의도를 명확히 전달하기 위해 상황에 맞는 전략을 선택한다.

* **Few-shot Prompting** <Badge type="tip" text="Intent" /> : 작성자의 의도를 정확하게 반영해야 하는 작업에서 예시를 제공하여 결과의 일관성을 확보한다.
* **Zero-shot Prompting**: 정해진 틀을 벗어난 다양한 결과물이나 창의적인 접근이 필요한 경우 예시 없이 지시 사항만을 전달한다.

## Planning Use

기획 단계에서는 AI에게 먼저 질문하게 만들어 내 생각을 끄집어내는 쪽으로 사용한다.

* **Question-driven Planning** <Badge type="tip" text="Discovery" /> : 막연한 아이디어를 바로 정리하기보다, AI가 구체화를 위한 질문을 던지게 하여 생각을 밖으로 끌어낸다.

## Iteration and Feedback

AI가 생성한 결과물이 요구사항을 충족하지 못하는 경우 구체적인 피드백을 통해 개선한다.

* **Reasoning Feedback** <Badge type="info" text="Correction" /> : 단순히 결과의 수정을 요구하기보다, 어떤 부분이 왜 작성자의 의도와 일치하지 않는지 구체적으로 설명한다. 명확한 원인 분석과 제약 조건을 추가하여 결과물의 품질을 높인다.
* **Module Feedback Loop**: 특정 모듈이 어느 정도 완성되면 AI에게 피드백을 받고, 수정한 뒤 다시 피드백을 받는 식으로 반복한다.
