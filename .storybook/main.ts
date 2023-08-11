import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
    stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
    /** Expose public folder to storybook as static */
    staticDirs: ["../public"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        '@storybook/addon-onboarding',
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: true,
                fastRefresh: true,
            },
        },
    ],
    framework: { name: "@storybook/nextjs", options: {} },
    core: {
        builder: "@storybook/builder-webpack5",
    },
    docs: {
        autodocs: 'tag',
    },
};

export default config;
