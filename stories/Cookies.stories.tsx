// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { DemoCookieSettings } from "../components/patterns/cookies"

const meta: Meta<typeof DemoCookieSettings> = {
  component: DemoCookieSettings,
}

export default meta
type Story = StoryObj<typeof DemoCookieSettings>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <DemoCookieSettings />,
}
