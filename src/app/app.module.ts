import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StateService } from '../app/state-name-data.service';
import { ConnectServerIssueService } from './shared/connect-server-issue.service';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';

const appRoutes: Routes = [
  {path: 'sample', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    HomeComponent,
    MyNavComponent,
    LeftSideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StateService, ConnectServerIssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
