import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }