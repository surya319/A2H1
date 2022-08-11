import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PromptComponentComponent } from './prompt-component/prompt-component.component';
import { PwaService } from './services/pwa.service';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
// import {OVERLAY_PROVIDERS} from "@angular/material";
import { OverlayModule } from "@angular/cdk/overlay";

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();

@NgModule({
  declarations: [
    AppComponent,
    PromptComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true},
    { provide: MatBottomSheet },
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
