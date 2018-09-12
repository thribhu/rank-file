import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { StateService } from '../app/state-name-data.service';
import { ConnectServerIssueService } from './shared/connect-server-issue.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StateService, ConnectServerIssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
