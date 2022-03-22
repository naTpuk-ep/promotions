import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent {
  // private _hideHeaderSubscription!: Subscription;
  // private _fixedHeaderSubscription!: Subscription;
  //
  // @Select(SproCdkLayoutState.openHeader) open$!: Observable<boolean>;
  // @Select(SproCdkLayoutState.fixedHeader) fixed$!: Observable<boolean>;

  // @Input() open!: boolean;
  // @Input() fixed!: boolean;
  @Input() headerContainerClassList: string | Array<string> = '';

  // constructor() {
  // this.stateSubscribe();
  // }

  // ngOnInit(): void {
  //   this.fixed = true;
  // }

  // stateSubscribe() {
  //   this._hideHeaderSubscription = this.open$.subscribe((payload) => {
  //     this.open = payload;
  //   });
  //
  //   this._fixedHeaderSubscription = this.fixed$.subscribe((payload) => {
  //     this.fixed = payload;
  //   });
  // }
}
