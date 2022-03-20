import { Component, Input, OnDestroy, OnInit } from '@angular/core';
// import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { OpenLeftContainerStatusType } from '../left-side-container/left-side-container.component';
// import {
//   SproCdkLayoutState,
//   OpenLeftContainerStatusType,
//   OpenMenuStatusType,
// } from '../../store/state/spro-cdk-layout.state';
// import { SproCdkBaseComponent } from '../../common/spro-cdk-base-component';
// import {
//   ChangeOpenMenuStatus,
//   ChangeOpenStatusLeftContainer,
// } from '../../store/actions/spro-cdk-layout.actions';

export type OpenMenuStatusType = 'collapse' | 'full';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent {
  public containerOpenStatus!: OpenLeftContainerStatusType;
  public menuOpenStatus!: OpenMenuStatusType;

  // @Select(SproCdkLayoutState.getLeftContainerOpenStatus)
  // containerOpenStatus$!: Observable<OpenLeftContainerStatusType>;
  // @Select(SproCdkLayoutState.getOpenMenuStatus) menuOpenStatus$!: Observable<OpenMenuStatusType>;
  private _containerOpenStatusSubscription!: Subscription;
  private _menuOpenStatusSubscription!: Subscription;

  @Input() menuHeaderClassList: string | Array<string>;

  constructor() {
    // this.stateSubscribe();
    this.menuHeaderClassList = '';
  }

  // ngOnInit() {}
  //
  // stateSubscribe() {
  //   this._containerOpenStatusSubscription = this.containerOpenStatus$.subscribe((payload) => {
  //     this.containerOpenStatus = payload;
  //   });
  //   this._menuOpenStatusSubscription = this.menuOpenStatus$.subscribe((payload) => {
  //     this.menuOpenStatus = payload;
  //   });
  // }

  toggle() {
    this.containerOpenStatus =
      this.containerOpenStatus === 'open-collapse' ? 'open-with-shift' : 'open-collapse';
    this.menuOpenStatus = this.menuOpenStatus === 'full' ? 'collapse' : 'full';
    // this.store.dispatch(new ChangeOpenStatusLeftContainer(this.containerOpenStatus));
    // this.store.dispatch(new ChangeOpenMenuStatus(this.menuOpenStatus));
  }

  // ngOnDestroy() {
  //   this._containerOpenStatusSubscription.unsubscribe();
  //   this._menuOpenStatusSubscription.unsubscribe();
  // }
}
