import { Component,OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { PromptComponentComponent } from '../app/prompt-component/prompt-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A2H';
   
  constructor( private bottomSheet: MatBottomSheet) {
  }
  ngOnInit(): void {
    // this.bottomSheet.open(PromptComponentComponent, {

    //   panelClass: ['bg-white', 'rounded-top', 'mdl-pd']

    // });
  }
}
