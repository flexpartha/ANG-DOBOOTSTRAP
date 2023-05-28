import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent, ProComponent]
})
export class AppModule { 
  ngDoBootstrap(appRef:ApplicationRef){
    console.log('called....');
    const App = window.innerWidth > 300 ? ProComponent : AppComponent;
    appRef.bootstrap(App, document.getElementById('app'));
    //appRef.bootstrap(ProComponent)
  }
}
