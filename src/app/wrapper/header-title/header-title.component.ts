import { Component } from '@angular/core';

@Component({
  selector: 'spro-cdk-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss'],
})
export class HeaderTitleComponent {
  public title = 'Title';

  // @Select(SproCdkLayoutState.getHeaderTitle) title$!: Observable<TitleNameInterface>;

  constructor() {
    // this.title = {
    //   name: '',
    //   subName: '',
    // };
    // this.stateSubscribe();
  }

  // stateSubscribe() {
  // this.title$.subscribe((titleData: TitleNameInterface) => {
  //   this.title.name = titleData?.name;
  //   this.title.subName = titleData?.subName;
  // });
  // }
}
