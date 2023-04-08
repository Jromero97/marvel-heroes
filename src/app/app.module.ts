import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import {LoadingInterceptor} from "./shared/interceptors/loading.interceptor";
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeroesComponent,
    SearchbarComponent,
    FilterPipe,
    PaginationComponent,
    LoaderComponent,
    ErrorMessageComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
