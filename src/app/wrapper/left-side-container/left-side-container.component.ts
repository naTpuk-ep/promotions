import { Component } from '@angular/core';

export type OpenLeftContainerStatusType =
  | 'open-over'
  | 'open-with-shift'
  | 'open-collapse'
  | 'close';

@Component({
  selector: 'app-left-side-container',
  templateUrl: './left-side-container.component.html',
  styleUrls: ['./left-side-container.component.scss'],
})
export class LeftSideContainerComponent {
  public openMenuStatus: OpenLeftContainerStatusType;
  // private _openStatusSubscription!: Subscription;

  // @Select(SproCdkLayoutState.getLeftContainerOpenStatus)
  // openStatus$!: Observable<OpenLeftContainerStatusType>;

  constructor() {
    this.openMenuStatus = 'open-over';
    // this.stateSubscribe();
  }

  // stateSubscribe() {
  // this._openStatusSubscription = this.openStatus$.subscribe((payload) => {
  //   this.openMenuStatus = payload;
  // });
  // }

  // ngOnDestroy() {
  //   this._openStatusSubscription.unsubscribe();
  // }
}
