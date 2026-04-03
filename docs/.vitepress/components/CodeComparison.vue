<script setup lang="ts">
import { computed } from "vue";

type ComparisonLine = {
  changed: boolean;
  number: string;
  text: string;
};

type ComparisonPanel = {
  key: "before" | "after";
  label: string;
  lines: ComparisonLine[];
};

const props = withDefaults(
  defineProps<{
    beforeCode?: string;
    afterCode?: string;
    beforeLabel?: string;
    afterLabel?: string;
  }>(),
  {
    beforeCode: `const result = true;
const error = false;`,
    afterCode: `const isComplete = true;
const hasError = false;`,
    beforeLabel: "Ambiguous",
    afterLabel: "Clear Prefix",
  },
);

const splitLines = (value: string) => value.replace(/\r\n/g, "\n").split("\n");

const createLines = (source: string, opposite: string): ComparisonLine[] => {
  const sourceLines = splitLines(source);
  const oppositeLines = splitLines(opposite);
  const totalLines = Math.max(sourceLines.length, oppositeLines.length);

  return Array.from({ length: totalLines }, (_, index) => {
    const text = sourceLines[index] ?? "";
    const oppositeText = oppositeLines[index] ?? "";

    return {
      changed: text !== oppositeText,
      number: String(index + 1),
      text,
    };
  });
};

const panels = computed<ComparisonPanel[]>(() => [
  {
    key: "before",
    label: props.beforeLabel,
    lines: createLines(props.beforeCode, props.afterCode),
  },
  {
    key: "after",
    label: props.afterLabel,
    lines: createLines(props.afterCode, props.beforeCode),
  },
]);
</script>

<template>
  <div class="code-comparison">
    <section
      v-for="panel in panels"
      :key="panel.key"
      class="comparison-panel"
      :data-tone="panel.key"
    >
      <header class="comparison-header">
        <span class="comparison-label">{{ panel.label }}</span>
      </header>

      <pre class="comparison-code vp-code"><code><span
        v-for="line in panel.lines"
        :key="`${panel.key}-${line.number}`"
        class="comparison-line"
        :class="{ changed: line.changed }"
      ><span class="line-number">{{ line.number }}</span><span class="line-content">{{ line.text || " " }}</span></span></code></pre>
    </section>
  </div>
</template>

<style scoped>
.code-comparison {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 24px 0;
}

.comparison-panel {
  min-width: 0;
}

.comparison-header {
  margin-bottom: 8px;
}

.comparison-label {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.comparison-panel[data-tone="before"] .comparison-label {
  color: var(--vp-code-line-diff-remove-symbol-color);
}

.comparison-panel[data-tone="after"] .comparison-label {
  color: var(--vp-code-line-diff-add-symbol-color);
}

.comparison-code {
  margin: 0;
  border: 1px solid var(--vp-code-block-divider-color);
  background: var(--vp-code-block-bg);
  color: var(--vp-code-block-color);
  overflow-x: auto;
}

.comparison-code code {
  display: block;
}

.comparison-line {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 12px;
  padding: 0 14px;
  min-height: 36px;
}

.comparison-line + .comparison-line {
  border-top: 1px solid var(--vp-code-block-divider-color);
}

.comparison-panel[data-tone="before"] .comparison-line.changed {
  background: var(--vp-code-line-diff-remove-color);
  box-shadow: inset 2px 0 0 var(--vp-code-line-diff-remove-symbol-color);
}

.comparison-panel[data-tone="after"] .comparison-line.changed {
  background: var(--vp-code-line-diff-add-color);
  box-shadow: inset 2px 0 0 var(--vp-code-line-diff-add-symbol-color);
}

.line-number {
  display: inline-flex;
  justify-content: flex-end;
  padding: 8px 0;
  color: var(--vp-code-line-number-color);
  user-select: none;
}

.comparison-panel[data-tone="before"] .comparison-line.changed .line-number {
  color: var(--vp-code-line-diff-remove-symbol-color);
}

.comparison-panel[data-tone="after"] .comparison-line.changed .line-number {
  color: var(--vp-code-line-diff-add-symbol-color);
}

.line-content {
  display: block;
  padding: 8px 0;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (max-width: 768px) {
  .code-comparison {
    grid-template-columns: 1fr;
  }
}
</style>
