import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./style.css";
import CodeComparison from "../components/CodeComparison.vue";
import CommitGenerator from "../components/CommitGenerator.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CodeComparison", CodeComparison);
    app.component("CommitGenerator", CommitGenerator);
  },
} satisfies Theme;
