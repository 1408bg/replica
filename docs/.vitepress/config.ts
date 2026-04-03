import { withMermaid } from "vitepress-plugin-mermaid";
import { defineConfig } from "vitepress";

export default withMermaid(
  defineConfig({
    title: "Replica",
    base: "/replica/",
    description: "모방 개발을 위한 지침서",
    themeConfig: {
      nav: [
        { text: "Home", link: "/" },
        { text: "Persona", link: "/persona/" },
        { text: "Philosophy", link: "/philosophy/" },
        { text: "Stack", link: "/stack/" },
        { text: "Conventions", link: "/conventions/" },
        { text: "Patterns", link: "/patterns/" },
        { text: "AI Workflow", link: "/ai-workflow/" },
      ],
      sidebar: {
        "/persona/": [
          {
            text: "Prompt",
            items: [{ text: "Persona", link: "/persona/" }],
          },
        ],
        "/philosophy/": [
          {
            text: "Philosophy",
            items: [
              { text: "Overview", link: "/philosophy/" },
              { text: "Perspective", link: "/philosophy/perspective" },
              { text: "Decision Making", link: "/philosophy/decision-making" },
              { text: "Anti-patterns", link: "/philosophy/anti-patterns" },
            ],
          },
        ],
        "/stack/": [
          {
            text: "Stack",
            items: [
              { text: "Overview", link: "/stack/" },
              { text: "Frontend", link: "/stack/frontend" },
              { text: "Backend", link: "/stack/backend" },
              { text: "Tooling", link: "/stack/tooling" },
            ],
          },
        ],
        "/conventions/": [
          {
            text: "Conventions",
            items: [
              { text: "Overview", link: "/conventions/" },
              { text: "Typescript", link: "/conventions/typescript" },
              { text: "Naming", link: "/conventions/naming" },
              { text: "Structure", link: "/conventions/structure" },
              { text: "Git", link: "/conventions/git" },
            ],
          },
        ],
        "/patterns/": [
          {
            text: "Patterns",
            items: [{ text: "Overview", link: "/patterns/" }],
          },
          {
            text: "Frontend",
            items: [
              { text: "Component", link: "/patterns/frontend/component" },
              { text: "State", link: "/patterns/frontend/state" },
              { text: "Data Fetching", link: "/patterns/frontend/data-fetching" },
              { text: "Styling", link: "/patterns/frontend/styling" },
            ],
          },
          {
            text: "Backend",
            items: [
              { text: "API Design", link: "/patterns/backend/api-design" },
              { text: "Schema", link: "/patterns/backend/schema" },
              { text: "Error Handling", link: "/patterns/backend/error-handling" },
            ],
          },
        ],
        "/ai-workflow/": [
          {
            text: "AI Workflow",
            items: [
              { text: "Overview", link: "/ai-workflow/" },
              { text: "Prompting", link: "/ai-workflow/prompting" },
              { text: "Code Review", link: "/ai-workflow/code-review" },
            ],
          },
        ],
        "/": [
          {
            text: "Navigation",
            items: [
              { text: "Home", link: "/" },
              { text: "Persona", link: "/persona/" },
              { text: "Philosophy", link: "/philosophy/" },
              { text: "Stack", link: "/stack/" },
              { text: "Conventions", link: "/conventions/" },
              { text: "Patterns", link: "/patterns/" },
              { text: "AI Workflow", link: "/ai-workflow/" },
            ],
          },
        ],
      },
    },
  }),
);
