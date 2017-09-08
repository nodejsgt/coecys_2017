import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FroalaEditorModule, FroalaViewModule  } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpositorsListComponent } from './components/expositors-list/expositors-list.component';
import { ExpositorComponent } from './components/expositor/expositor.component';
import { ExpositorUpdateComponent } from './components/expositor-update/expositor-update.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExpositorTalleresComponent } from './components/expositor-talleres/expositor-talleres.component';

import { ExpositorService  } from './services/expositor.service';
import { BlockUIModule } from 'ng-block-ui';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExpositorsListComponent,
    ExpositorComponent,
    ExpositorUpdateComponent,
    AboutComponent,
    NotFoundComponent,
    ExpositorTalleresComponent,
    FooterComponent,
    HeaderComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BlockUIModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),    
    AppRoutingModule
  ],
  providers: [
    ExpositorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
