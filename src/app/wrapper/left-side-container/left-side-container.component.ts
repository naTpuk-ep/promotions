import { Component } from '@angular/core';
import { WrapperService } from '../wrapper.service';

@Component({
  selector: 'app-left-side-container',
  templateUrl: './left-side-container.component.html',
  styleUrls: ['./left-side-container.component.scss'],
})
export class LeftSideContainerComponent {
  // public openMenuStatus!: OpenLeftContainerStatusType;
  // private _openStatusSubscription!: Subscription;

  // @Select(SproCdkLayoutState.getLeftContainerOpenStatus)
  // openStatus$!: Observable<OpenLeftContainerStatusType>;

  constructor(public wrapperService: WrapperService) {
    // this.openMenuStatus = 'open-collapse';
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
