---
aside: false
outline: false
---

<script setup>
import { withBase } from "vitepress";
</script>

# Patterns

<div class="section-cover section-cover-patterns">
  <p class="section-cover-description">
    실제 구현 단계에서 반복해서 사용하는 구조와 흐름을 다룬다. 컨벤션이 로컬 규칙이라면, 패턴은 기능 단위의 설계 방식이다.
  </p>
  <div class="section-cover-topics" aria-label="Patterns topics">
    <a :href="withBase('/patterns/frontend/component.html')">Component</a>
    <a :href="withBase('/patterns/frontend/state.html')">State</a>
    <a :href="withBase('/patterns/frontend/data-fetching.html')">Data Fetching</a>
    <a :href="withBase('/patterns/frontend/styling.html')">Styling</a>
    <a :href="withBase('/patterns/backend/api-design.html')">API Design</a>
    <a :href="withBase('/patterns/backend/schema.html')">Schema</a>
    <a :href="withBase('/patterns/backend/error-handling.html')">Error Handling</a>
  </div>
</div>
