import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'xsm-bg': '0px 2px 2px 2px rgba(0, 0, 0, 0.16)',
        'sm-bg': '0px 8px 10px rgba(0, 0, 0, 0.06)',
        'md-bg': '0px 16px 18px rgba(0, 0, 0, 0.06)',
        'lg-bg': '0px 32px 36px rgba(0, 0, 0, 0.06)',
        'xlg3-bg': '0px 64px 64px rgba(0, 0, 0, 0.06)',
        'xsm-btn': '0px 2px 2px 2px rgba(0, 0, 0, 0.24)',
        'sm-badge': '0px 2px 2px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
};
export default config;
