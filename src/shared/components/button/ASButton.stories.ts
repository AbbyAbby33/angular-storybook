import type { Meta, StoryObj, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// 官網：storybook\code\frameworks\angular\template\stories\basics\component-with-ng-content\ng-content-simple.stories.ts

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
    title: 'Example/ASButton',
    component: ButtonComponent,
    tags: ['autodocs'],
    render: (args: ButtonComponent) => ({
        props: {
            backgroundColor: null,
            ...args,
        },
    }),
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Info: Story = {
    args: {
        flag: 'info',
    },
};

export const Warn: Story = {
    args: {
        flag: 'warn',
    },
};

export const WithDynamicContentAndArgs: StoryFn = (args) => ({
    // template: `<app-button class="as-button ${args['flag']}">${args['content']}</app-button>`, // TODO: 樣式，如果做在全域就沒問題，但做在元件內的樣式檔
    template: `
                <app-button>
                    ${args['content']}
                </app-button>
            `,
});
// 這個應該是定義型別
WithDynamicContentAndArgs.argTypes = {
    content: { control: 'text' },
    flag: { control: 'text' },
};
// 這是內容
WithDynamicContentAndArgs.args = {
    content: '確定',
    flag: 'warn',
};

