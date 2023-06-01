import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'src/shared/components/button/button.module';
import { FruitNumModule } from 'src/shared/components/fruit-num/fruit-num.module';
import { StoreModule } from '@ngrx/store';
import { fruitNumReducer } from 'src/shared/components/fruit-num/state/fruit-num.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        FruitNumModule,
        StoreModule.forRoot({ num: fruitNumReducer })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
