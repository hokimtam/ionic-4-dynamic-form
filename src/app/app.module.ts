import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormioModule, FormioAppConfig } from 'angular-formio';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OsFormioConfigService } from './services/os-formio-config.service';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { registerRatingComponent } from './rating-wrapper-component/rating-wrapper.formio';
import { RatingWrapperComponent } from './rating-wrapper-component/rating-wrapper-component.component';

@NgModule({
  declarations: [AppComponent, RatingWrapperComponent],
  entryComponents: [RatingWrapperComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormioModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FormioAppConfig, useClass: OsFormioConfigService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector) {
    registerRatingComponent(injector);
  }
}
