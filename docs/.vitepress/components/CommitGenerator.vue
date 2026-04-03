<script setup lang="ts">
/**
 * CommitGenerator 컴포넌트
 * 
 * Conventional Commits 컨벤션에 맞는 커밋 메시지를 생성하는 인터랙티브 폼
 * Type, Scope, Message 를 입력하면 실시간으로 커밋 메시지를 조합하며, 복사 버튼으로 클립보드에 바로 복사 가능
 * 
 * @example
 * ```vue
 * <CommitGenerator />
 * ```
 */
import { ref, computed } from "vue";

const commitTypes = [
  { value: "feat", label: "feat", description: "새로운 기능" },
  { value: "fix", label: "fix", description: "버그 수정" },
  { value: "docs", label: "docs", description: "문서 수정" },
  { value: "style", label: "style", description: "코드 포맷팅" },
  { value: "refactor", label: "refactor", description: "코드 리팩토링" },
  { value: "test", label: "test", description: "테스트 추가" },
  { value: "chore", label: "chore", description: "기타 작업" },
];

const selectedType = ref("feat");
const scope = ref("");
const message = ref("");

const generatedCommit = computed(() => {
  const scopePart = scope.value.trim() ? `(${scope.value.trim()})` : "";
  return `${selectedType.value}${scopePart}: ${message.value.trim()}`;
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedCommit.value);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

const resetForm = () => {
  selectedType.value = "feat";
  scope.value = "";
  message.value = "";
};
</script>

<template>
  <div class="commit-generator">
    <div class="form-header">
      <h3>📝 Commit Message Generator</h3>
      <p class="description">Conventional Commits 컨벤션에 맞는 커밋 메시지를 생성합니다</p>
    </div>

    <div class="form-body">
      <div class="form-group">
        <label>Type</label>
        <select v-model="selectedType" class="form-select">
          <option 
            v-for="type in commitTypes" 
            :key="type.value" 
            :value="type.value"
          >
            {{ type.label }} - {{ type.description }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label>Scope <span class="optional">(optional)</span></label>
        <input 
          v-model="scope" 
          type="text" 
          placeholder="예: auth, api, ui"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Message</label>
        <input 
          v-model="message" 
          type="text" 
          placeholder="예: add login validation"
          class="form-input"
        />
      </div>
    </div>

    <div class="result-section">
      <div class="result-label">Generated Commit</div>
      <div class="result-code">
        <code>{{ generatedCommit }}</code>
        <button class="copy-btn" @click="copyToClipboard" title="Copy to clipboard">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="form-actions">
      <button class="reset-btn" @click="resetForm">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.commit-generator {
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  padding: 18px;
  margin: 20px 0;
}

.form-header {
  margin-bottom: 14px;
}

.form-header h3 {
  margin: 0 0 4px 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.description {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.form-body {
  display: grid;
  gap: 12px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group label {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.optional {
  font-weight: 400;
  color: var(--vp-c-text-3);
}

.form-select,
.form-input {
  min-height: 38px;
  padding: 8px 11px;
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.8125rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-select:focus,
.form-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.form-input::placeholder {
  color: var(--vp-c-text-3);
}

.result-section {
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--vp-c-divider);
}

.result-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.result-code {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.8125rem;
  color: var(--vp-c-brand-2);
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}

.form-actions {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}

.reset-btn {
  min-height: 34px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-border);
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.reset-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
