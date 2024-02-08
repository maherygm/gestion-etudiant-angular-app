import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';
import { HomeComponent } from './main/pages/home/home.component';
import { NavigationBarComponent } from './main/navigationBar/navigationBar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './main/pages/login/login.component';
import { SigninComponent } from './main/pages/signin/signin.component';
import { NavigationDashboardComponent } from './main/pages/dashboard/layout/navigation-dashboard/navigation-dashboard.component';
import { ChartPageComponent } from './main/pages/dashboard/content/chart-page/chart-page.component';
import { ManagementPagesComponent } from './main/pages/dashboard/content/management-pages/management-pages.component';
import { SettingsPagesComponent } from './main/pages/dashboard/content/settings-pages/settings-pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './main/pages/home/content/banner/banner.component';
import { FooterComponent } from './main/footer/footer.component';
import { AProposComponent } from './main/pages/home/content/a-propos/a-propos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    NavigationBarComponent,
    LoginComponent,
    SigninComponent,
    NavigationDashboardComponent,
    ChartPageComponent,
    ManagementPagesComponent,
    SettingsPagesComponent,
    BannerComponent,
    FooterComponent,
    AProposComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            component: ChartPageComponent,
          },
          { path: 'chart', component: ChartPageComponent },
          { path: 'management', component: ManagementPagesComponent },
          { path: 'settings', component: SettingsPagesComponent },
        ],
      },
      { path: 'login', component: LoginComponent },
      { path: 'signin', component: SigninComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
    BrowserAnimationsModule,
    NgApexchartsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
