import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WrapperModule } from './wrapper.module';

export type TOpenLeftContainerStatus = 'open-over' | 'open-collapse';
// | 'close'
// | 'open-with-shift' |

export type TOpenMenuStatus = 'collapse' | 'full';

@Injectable()
export class WrapperService {
  openMenuStatus$ = new BehaviorSubject<TOpenMenuStatus>('full');
  containerOpenStatus$ = new BehaviorSubject<TOpenLeftContainerStatus>('open-over');
  constructor() {}

  toggleMenu() {
    this.openMenuStatus$.next(this.openMenuStatus$.value === 'collapse' ? 'full' : 'collapse');
    this.containerOpenStatus$.next(
      this.containerOpenStatus$.value === 'open-collapse' ? 'open-over' : 'open-collapse'
    );
  }
}
