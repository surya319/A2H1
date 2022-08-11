import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { timer } from 'rxjs/internal/observable/timer';
import { take } from 'rxjs/operators';
import { PromptComponentComponent } from '../prompt-component/prompt-component.component';


@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private promptEvent: any;

  constructor(
    private bottomSheet: MatBottomSheet,
    private platform: Platform
  ) { }


  public initPwaPrompt() {
    if (this.platform.ANDROID) {
      window.addEventListener('beforeinstallprompt', (event: any) => {
        event.preventDefault();
        this.promptEvent = event;
        this.openPromptComponent('android');
      });
    }
    if (this.platform.IOS) {
      this.openPromptComponent('ios');
     // const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
     const isInStandaloneMode = ('standalone' in window.navigator);
      if (!isInStandaloneMode) {

      }
    }
  }

  private openPromptComponent(mobileType: 'ios' | 'android') {
    timer(3000)
      .pipe(take(1))
      .subscribe(() => this.bottomSheet.open(PromptComponentComponent, { data: { mobileType, promptEvent: this.promptEvent } }));
  }
}
