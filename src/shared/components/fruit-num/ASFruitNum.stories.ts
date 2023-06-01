import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FruitNumComponent } from './fruit-num.component';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { fruitNumReducer } from './state/fruit-num.reducer';

// stackoverflow：https://stackoverflow.com/questions/65277875/how-do-i-set-the-state-of-ngrx-store-in-storybook-angular-tests

// the state for the mockStore
const initialState = {
    num: 20
};

// FIXME: 不會更新

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<FruitNumComponent> = {
    title: 'Example/ASFruitNum',
    component: FruitNumComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                StoreModule.forRoot({ num: fruitNumReducer }),
            ],
            declarations: [FruitNumComponent],
            providers: [
                provideMockStore({ initialState })
            ]
        })
    ],
    render: (args: FruitNumComponent) => ({
        props: {
            ...args,
        },
    }),
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<FruitNumComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
    args: {
        name: '蘋果',
    },
};
