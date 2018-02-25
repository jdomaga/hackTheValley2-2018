import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatchercontrolService} from './services/matchercontrol.service';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { MatchedpageComponent } from './components/matchedpage/matchedpage.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    MatchedpageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent },
      { path: 'matched', component: MatchedpageComponent }
    ])
  ],
  providers: [MatchercontrolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
