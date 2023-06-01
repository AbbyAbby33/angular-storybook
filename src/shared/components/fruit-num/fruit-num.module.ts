import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitNumComponent } from './fruit-num.component';



@NgModule({
    declarations: [
        FruitNumComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FruitNumComponent
    ]
})
export class FruitNumModule { }
