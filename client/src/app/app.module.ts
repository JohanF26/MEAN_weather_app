import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'
import { AuthAdminGuard } from './guards/auth-admin.guard'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { RegisterComponent } from './components/login-page/register/register.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AddnewsComponent } from './components/admin/addnews/addnews.component';
import { DataComponent } from './components/admin/data/data.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { EditnewsComponent } from './components/admin/editnews/editnews.component';
import { NewsItemComponent } from './components/home/recent-news/news-item/news-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { DatePipe } from './pipes/date.pipe';

//weather components
import { CityCardComponent } from './components/user/weather-components/city-card/city-card.component';
import { WeatherComponent } from './components/user//weather-components/weather/weather.component';
import { LoaderComponent } from './components/user//weather-components/loader/loader.component';

import { UiSwitchModule } from 'ngx-ui-switch';
import { NotFoundComponent } from './components/user//weather-components/not-found/not-found.component';
import { ErrorComponent } from './components/user//weather-components/error/error.component';
import { ClockComponent } from './components/user//weather-components/clock/clock.component';
import { DateComponent } from './components/user//weather-components/date/date.component';
import { ForecastComponent } from './components/user//weather-components/forecast/forecast.component';
import { ForecastItemComponent } from './components/user//weather-components/forecast/forecast-item.component';

import { AppService } from './components/user//weather-components/shared/services/app.service';
import { LocalStorageService } from './components/user//weather-components/shared/services/localstorage.service';
import { WeatherService } from './components/user//weather-components/weather/weather.service';
import { ResolveLocationService } from './components/user//weather-components/shared/services/resolve-location.service';
import { CityCardResolver } from './components/user//weather-components/city-card/city-card-resolver.service';
import { HelperService } from './components/user//weather-components/shared/services/helper.service';
import { LoaderService } from './components/user//weather-components/loader/loader.service';
import { ClockService } from './components/user//weather-components/clock/clock.service';
import { DateService } from './components/user//weather-components/date/date.service';
import { ForecastService } from './components/user//weather-components/forecast/forecast.service';
import { WeatherIconsService } from './components/user//weather-components/shared/services/weather-icons/weather-icons.service';

import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { AlertComponent } from './components/shared/alert/alert.component';
import { SportsComponent } from './components/sports/sports.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/user/aboutus/aboutus.component';
import { ContactusComponent } from './components/user/contactus/contactus.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ImgCarouselComponent } from './components/home/img-carousel/img-carousel.component';
import { RecentNewsComponent } from './components/home/recent-news/recent-news.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';

const routes: Routes =
[
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/addnews', component: AddnewsComponent, canActivate: [AuthAdminGuard] },
  { path: 'admin/data', component: DataComponent, canActivate: [AuthAdminGuard] },
  { path: 'article/:id', component: NewsArticleComponent },
  { path: 'home', component: HomeComponent, resolve: { weather: ResolveLocationService } },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'sports', component: SportsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    AddnewsComponent,
    DataComponent,
    EditnewsComponent,
    NewsItemComponent,
    AlertComponent,
    CityCardComponent,
    WeatherComponent,
    LoaderComponent,
    NotFoundComponent,
    ErrorComponent,
    ClockComponent,
    DateComponent,
    ForecastComponent,
    ForecastItemComponent,
    SearchPipe,
    DatePipe,
    SportsComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    LoginPageComponent,
    ImgCarouselComponent,
    RecentNewsComponent,
    NewsArticleComponent,
    FeaturedComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    LocalStorageService,
    WeatherService,
    ResolveLocationService,
    CityCardResolver,
    LoaderService,
    HelperService,
    ClockService,
    DateService,
    ForecastService,
    WeatherIconsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
