// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react"

import { DemoCreateAccount } from "../components/patterns/create-account"

const meta: Meta<typeof DemoCreateAccount> = {
  component: DemoCreateAccount,
}

export default meta
type Story = StoryObj<typeof DemoCreateAccount>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <DemoCreateAccount />,
}
