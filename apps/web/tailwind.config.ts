import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "plugins" | "theme"> = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}" , "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [sharedConfig],
  plugins: [],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },

};

export default config;
