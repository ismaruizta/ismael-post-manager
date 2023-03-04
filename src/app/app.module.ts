import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { postReducer } from './reducers/post.reducers';
import { PostEffects } from './effects/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostItemComponent,
    HomeComponent,
    InfoComponent,
    PostFormComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
