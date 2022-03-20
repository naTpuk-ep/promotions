import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { accordion, openCloseStateIcon } from './menu-animations';
import { OpenMenuStatusType } from '../menu-header/menu-header.component';
import { IMenuItem } from './menu-config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [openCloseStateIcon, accordion],
})
export class MenuComponent implements OnInit {
  @Input() menuList: Array<IMenuItem>;
  @Input() openMenuStatus!: boolean;
  // @Input() showSearch!: boolean;

  public preparedMenuList!: Array<IMenuItem>;
  public searchMenuValue!: string;

  // @Select(SproCdkLayoutState.getOpenMenuStatus) openStatus$!: Observable<OpenMenuStatusType>;
  // private _openStatusSubscription!: Subscription;

  constructor(private router: Router) {
    this.menuList ??= [];
    // if (this.openMenuStatus === undefined) {
    //   this._openStatusSubscription = this.openStatus$.subscribe((payload) => {
    //     this.openMenuStatus = payload === 'full';
    //
    //     if (this.searchMenuValue) {
    //       // если было значение в поисковой строке, то обнулить поиск и свернуть родительские элементы
    //       this.searchMenu();
    //     }
    //     setTimeout(() => {
    //       this.searchMenuValue = '';
    //     }, 500);
    //   });
    // }
  }

  ngOnInit() {
    this.searchMenu();
    this.firstPreparationMenu();
  }

  openMenuItem(event: MouseEvent, item: IMenuItem) {
    if (!event.ctrlKey) {
      const inactiveMenuList = function (menuList: Array<IMenuItem>) {
        menuList.forEach((menuItem) => {
          menuItem.active = false;
          if (menuItem.children?.length) {
            inactiveMenuList(menuItem.children);
          }
        });
      };

      if (item.children) {
        item.open = !item.open;
        event.stopPropagation(); // чтобы не сбрасывались queryParams при клике на item with children
        event.preventDefault(); // чтобы не сбрасывались queryParams при клике на item with children
      } else {
        inactiveMenuList(this.menuList);
        // this.router.navigateByUrl(item.url);
        item.active = true;
      }
    }
  }

  menuItemEnter(currentItem: IMenuItem) {
    if (!this.openMenuStatus) {
      currentItem.openCollapsedSubmenu = true;
    }
  }

  menuItemLeave(currentItem: IMenuItem) {
    if (!this.openMenuStatus) {
      currentItem.openCollapsedSubmenu = false;
    }
  }

  reset() {
    this.menuList.forEach((item) => {
      item.open = false;
    });
  }

  firstPreparationMenu() {
    const { host } = window.location;
    let url: string = ''; //  = window.location.pathname;

    const routerSubscription = this.router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        routerSubscription.unsubscribe();
        url = res.urlAfterRedirects.split('?')[0] || res.url.split('?')[0];
        const path = url.slice(1);
        /* if (host === 'webapps.armtek.local') {
          // https://webapps.armtek.local/pcm/test/loyalty/points
          path = url.split('/').slice(3).join('/');
        } else {
          path = url.split('/').slice(1).join('/');
        } */

        const search = (list: Array<IMenuItem>, parent?: IMenuItem) => {
          list.forEach((menuItem) => {
            if (parent) {
              menuItem.parent = parent;
            }
            if (menuItem.url === path) {
              openAndSetActive(menuItem);
            } else if (menuItem.children?.length) {
              search(menuItem.children, menuItem);
            }
          });
        };
        search(this.menuList);

        function openAndSetActive(menuItem: IMenuItem) {
          if (menuItem.children?.length) {
            menuItem.open = true;
          } else {
            menuItem.active = true;
          }
          if (menuItem.parent) {
            openAndSetActive(menuItem.parent);
          }
        }
      }
    });
  }

  menuPreparation(list: Array<IMenuItem>) {
    const f = (list: Array<IMenuItem>) => {
      list.forEach((item: IMenuItem) => {
        if (item.children) {
          const parent = item;
          item.children.forEach((childrenItem: IMenuItem) => {
            childrenItem.parent = parent;
          });
          f(item.children);
        }
      });
    };

    f(list);
  }

  hasActiveMenuItem(menuItem: IMenuItem): boolean {
    const search = (menuList: Array<IMenuItem>): boolean => {
      return menuList.some((menuItem) => {
        if (menuItem.active === true) return true;
        if (menuItem.children?.length) {
          return search(menuItem.children);
        }
        return false;
      });
    };
    if (menuItem.children) {
      return search(menuItem.children);
    }
    return false;
  }

  searchMenu(event?: any) {
    const value = event?.target.value;
    this.preparedMenuList = [];

    if (value) {
      const f = (list: Array<IMenuItem>) => {
        this.menuPreparation(list);
        const result = list.filter((item: any) => {
          if (item.children) {
            f(item.children);
          }
          return item.title.toLowerCase().includes(value.toLowerCase());
        });
        // открываем родителей и добавляем только уникальные
        result.forEach((resultItem: IMenuItem) => {
          resultItem.open = true;
          resultItem.parent ? (resultItem.parent.open = true) : null;
          if (
            this.preparedMenuList.findIndex(
              (item: IMenuItem) => item.id === resultItem.parent?.id
            ) === -1 &&
            this.preparedMenuList.findIndex((item: IMenuItem) => item.id === resultItem.id) === -1
          ) {
            if (resultItem.parent) {
              resultItem.parent.children = resultItem.parent.children?.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
              );
              this.preparedMenuList.push({ ...resultItem.parent });
            } else {
              this.preparedMenuList.push({ ...resultItem });
            }
          }
        });
      };
      f(JSON.parse(JSON.stringify(this.menuList)));
    } else {
      this.reset();
      this.preparedMenuList = this.menuList;
    }
  }
}
