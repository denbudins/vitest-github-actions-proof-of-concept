import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json-summary", "json"],
      reportOnFailure: true,
      reportsDirectory: path.resolve(__dirname, "../../coverage/packages"),
    },
  },
});
