import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-prompt-component',
  templateUrl: './prompt-component.component.html',
  styleUrls: ['./prompt-component.component.css']
})
export class PromptComponentComponent implements OnInit {
  PlatformIos:any;
  PlatformAndroid:any;
  Platform:any;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
  private bottomSheetRef: MatBottomSheetRef<PromptComponentComponent>,private platform: Platform) { }

  ngOnInit(): void {
  this.PlatformIos=  this.platform.IOS;
  this.PlatformAndroid=  this.platform.ANDROID;
  this.platform = this.platform;
  }
  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
}
