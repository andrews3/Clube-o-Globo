import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {VoucherPage} from "../pages/voucher/voucher";

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

export const declarations = [
  MyApp,
  HomePage,
  TabsPage,
  VoucherPage
];

export const firebaseConfig = {
  apiKey: "AIzaSyA4EKDrOvQP7W-cdhu5wOP8jD-3rwhW5VI",
  authDomain: "clube-o-globo.firebaseapp.com",
  databaseURL: "https://clube-o-globo.firebaseio.com",
  projectId: "clube-o-globo",
  storageBucket: "clube-o-globo.appspot.com",
  messagingSenderId: "1079890717677"
};

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: declarations,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
