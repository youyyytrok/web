// vocs.config.tsx
import { defineConfig } from "file:///Users/ericbrown/code/base/web/apps/base-docs/base-docs/node_modules/vocs/_lib/index.js";
import { Fragment, jsx, jsxs } from "file:///Users/ericbrown/code/base/web/apps/base-docs/base-docs/node_modules/react/jsx-runtime.js";
var baseConfig = {
  //basePath: "https://docs.base.org/docs", // Comment out in local dev
  baseUrl: "/",
  title: "Base Docs",
  description: "Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2",
  iconUrl: {
    light: "img/favicon.ico",
    dark: "img/favicon.ico"
  },
  logoUrl: {
    light: "img/base-logo.svg",
    dark: "img/base-logo.svg"
  }
};
var bannerConfig = {
  banner: "Welcome to Base Docs"
};
var sidebarConfig = {
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started"
    },
    {
      text: "Example",
      link: "/example"
    }
  ]
};
var markdownConfig = {
  code: {
    themes: {
      light: "github-light",
      dark: "github-dark"
    }
  }
};
var pluggableConfig = {
  markdown: {
    remarkPlugins: [
      remarkMath
    ]
  }
};
var blogConfig = {
  blogDir: "./blog"
};
var headConfig = {
  head: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Base | Docs" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://docs.base.org/img/base-open-graph.png" }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Base | Docs" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://docs.base.org/img/base-open-graph.png" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Explore the documentation for Base, a secure, low-cost, builder-friendly Ethereum L2" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { property: "twitter:domain", content: "base.org" })
  ] })
};
var vocs_config_default = defineConfig({
  ...baseConfig,
  ...bannerConfig,
  ...sidebarConfig,
  ...blogConfig,
  ...headConfig,
  ...markdownConfig
});
export {
  vocs_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidm9jcy5jb25maWcudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2b2NzJ1xuXG5cbmNvbnN0IGJhc2VDb25maWcgPSB7XG4gIC8vYmFzZVBhdGg6IFwiaHR0cHM6Ly9kb2NzLmJhc2Uub3JnL2RvY3NcIiwgLy8gQ29tbWVudCBvdXQgaW4gbG9jYWwgZGV2XG4gIGJhc2VVcmw6ICcvJyxcbiAgdGl0bGU6ICdCYXNlIERvY3MnLFxuICBkZXNjcmlwdGlvbjogJ0V4cGxvcmUgdGhlIGRvY3VtZW50YXRpb24gZm9yIEJhc2UsIGEgc2VjdXJlLCBsb3ctY29zdCwgYnVpbGRlci1mcmllbmRseSBFdGhlcmV1bSBMMicsXG4gIGljb25Vcmw6IHtcbiAgICBsaWdodDogJ2ltZy9mYXZpY29uLmljbycsXG4gICAgZGFyazogJ2ltZy9mYXZpY29uLmljbycsXG4gIH0sXG4gIGxvZ29Vcmw6IHtcbiAgICBsaWdodDogJ2ltZy9iYXNlLWxvZ28uc3ZnJyxcbiAgICBkYXJrOiAnaW1nL2Jhc2UtbG9nby5zdmcnLFxuICB9XG59XG5cbi8vIHVzZWQgZm9yIGdsb2JhbCBkaXNtaXNzYWJsZSBhbm5vdW5jZW1lbnRzLCBldGNcbmNvbnN0IGJhbm5lckNvbmZpZyA9IHtcbiAgYmFubmVyOiBcIldlbGNvbWUgdG8gQmFzZSBEb2NzXCIsIFxufVxuXG5jb25zdCBzaWRlYmFyQ29uZmlnID0ge1xuICBzaWRlYmFyOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0dldHRpbmcgU3RhcnRlZCcsXG4gICAgICBsaW5rOiAnL2dldHRpbmctc3RhcnRlZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnRXhhbXBsZScsXG4gICAgICBsaW5rOiAnL2V4YW1wbGUnLFxuICAgIH0sXG4gIF0sXG59XG5cbmNvbnN0IG1hcmtkb3duQ29uZmlnID0ge1xuICBjb2RlOiB7XG4gICAgdGhlbWVzOiB7XG4gICAgICBsaWdodDogJ2dpdGh1Yi1saWdodCcsXG4gICAgICBkYXJrOiAnZ2l0aHViLWRhcmsnLFxuICAgIH1cbiAgfVxufVxuXG4vLyBwbHVnaW5zIGZvciB0cmFuc2Zvcm1pbmcgbWFya2Rvd24gXG5jb25zdCBwbHVnZ2FibGVDb25maWcgPXtcbiAgbWFya2Rvd246IHtcbiAgICByZW1hcmtQbHVnaW5zOiBbXG4gICAgICByZW1hcmtNYXRoXG4gICAgXVxuICB9XG59XG5cblxuY29uc3QgYmxvZ0NvbmZpZyA9IHtcbiAgYmxvZ0RpcjogXCIuL2Jsb2dcIlxufVxuXG4vLyBDYW4gZGVmaW5lIHBhdGggb2JqZWN0cyB3aGljaCByZXR1cm4gZGlmZmVyZW50IG1ldGEgdGFncyBmb3IgbW9yZSBjb250cm9sXG5jb25zdCBoZWFkQ29uZmlnID0ge1xuICBoZWFkOiAoXG4gICAgPD5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQmFzZSB8IERvY3NcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RvY3MuYmFzZS5vcmcvaW1nL2Jhc2Utb3Blbi1ncmFwaC5wbmdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJFeHBsb3JlIHRoZSBkb2N1bWVudGF0aW9uIGZvciBCYXNlLCBhIHNlY3VyZSwgbG93LWNvc3QsIGJ1aWxkZXItZnJpZW5kbHkgRXRoZXJldW0gTDJcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIkJhc2UgfCBEb2NzXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2RvY3MuYmFzZS5vcmcvaW1nL2Jhc2Utb3Blbi1ncmFwaC5wbmdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkV4cGxvcmUgdGhlIGRvY3VtZW50YXRpb24gZm9yIEJhc2UsIGEgc2VjdXJlLCBsb3ctY29zdCwgYnVpbGRlci1mcmllbmRseSBFdGhlcmV1bSBMMlwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiYmFzZS5vcmdcIiAvPlxuICAgIDwvPlxuICApLFxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLi4uYmFzZUNvbmZpZyxcbiAgLi4uYmFubmVyQ29uZmlnLFxuICAuLi5zaWRlYmFyQ29uZmlnLFxuICAuLi5ibG9nQ29uZmlnLFxuICAuLi5oZWFkQ29uZmlnLFxuICAuLi5tYXJrZG93bkNvbmZpZyxcbn0pXG5cbi8qIERpZmZlcmVuY2VzIGZyb20gRG9jdXNhdXJ1c1xuXG4gICAqIGZhdmljb24gbm90IHBhcnQgb2YgY29uZmlnIFxuICAgKiBvbkJyb2tlbkxpbmtzIGFuZCBtYXJrZG93biBsaW5rcyBub3QgaW4gY29uZmlnXG4gICAqIG9yZ2FuaXphdGlvbk5hbWUgYW5kIHByb2plY3ROYW1lIG5vdCBpbiBjb25maWdcbiAgICpcblxuXG5cbiovIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBOER6QixtQkFDRSxLQURGO0FBM0RKLElBQU0sYUFBYTtBQUFBO0FBQUEsRUFFakIsU0FBUztBQUFBLEVBQ1QsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLE1BQU07QUFBQSxFQUNSO0FBQ0Y7QUFHQSxJQUFNLGVBQWU7QUFBQSxFQUNuQixRQUFRO0FBQ1Y7QUFFQSxJQUFNLGdCQUFnQjtBQUFBLEVBQ3BCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixNQUFNO0FBQUEsSUFDSixRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLElBQU0sa0JBQWlCO0FBQUEsRUFDckIsVUFBVTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTSxhQUFhO0FBQUEsRUFDakIsU0FBUztBQUNYO0FBR0EsSUFBTSxhQUFhO0FBQUEsRUFDakIsTUFDRSxpQ0FDRTtBQUFBLHdCQUFDLFVBQUssVUFBUyxXQUFVLFNBQVEsV0FBVTtBQUFBLElBQzNDLG9CQUFDLFVBQUssVUFBUyxZQUFXLFNBQVEsZUFBYztBQUFBLElBQ2hELG9CQUFDLFVBQUssVUFBUyxZQUFXLFNBQVEsaURBQWdEO0FBQUEsSUFDbEYsb0JBQUMsVUFBSyxVQUFTLGtCQUFpQixTQUFRLHdGQUF1RjtBQUFBLElBQy9ILG9CQUFDLFVBQUssVUFBUyxpQkFBZ0IsU0FBUSxlQUFjO0FBQUEsSUFDckQsb0JBQUMsVUFBSyxVQUFTLGlCQUFnQixTQUFRLGlEQUFnRDtBQUFBLElBQ3ZGLG9CQUFDLFVBQUssVUFBUyx1QkFBc0IsU0FBUSx3RkFBdUY7QUFBQSxJQUNwSSxvQkFBQyxVQUFLLFVBQVMsZ0JBQWUsU0FBUSx1QkFBc0I7QUFBQSxJQUM1RCxvQkFBQyxVQUFLLFVBQVMsa0JBQWlCLFNBQVEsWUFBVztBQUFBLEtBQ3JEO0FBR0o7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQUEsRUFDSCxHQUFHO0FBQ0wsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
