import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
    },
    projects: [
      {
        test: {
          name: "unit",
          environment: "jsdom",
          testTimeout: 60000,
          include: [
            "./**/*.unit.test.{ts,tsx,js}",
            "./**/*.unit.test.{ts,tsx,js}",
          ],
          exclude: ["**/node_modules/**", "**/dist/**"],
        },
      },
      {
        test: {
          name: "integration",
          environment: "jsdom",
          testTimeout: 60000,
          globalSetup: [
            path.resolve(__dirname, "../../vitest-setup-integration.ts"),
          ],
          include: [
            "./**/*.integration.test.{ts,tsx,js}",
            "./**/*.integration.test.{ts,tsx,js}",
          ],
          exclude: ["**/node_modules/**", "**/dist/**"],
        },
      },
      {
        test: {
          name: "debug",
          testTimeout: 60000,
          globalSetup: [
            path.resolve(__dirname, "../../vitest-setup-integration.ts"),
          ],
          include: ["./**/*.{test,spec,debug}.{js,ts}"],
          exclude: ["**/node_modules/**", "**/dist/**"],
        },
      },
    ],
  },
});
