import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const openCloseStateIcon = trigger('openCloseStateIcon', [
  state(
    'open',
    style({
      transform: 'rotate(90deg)',
    })
  ),
  state(
    'closed',
    style({
      transform: 'rotate(0deg)',
    })
  ),
  transition('open => closed', [animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')]),
  transition('closed => open', [animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')]),
]);

export const accordion = trigger('accordion', [
  state(
    'open',
    style({
      maxHeight: '1000px',
    })
  ),
  state(
    'closed',
    style({
      maxHeight: '0',
    })
  ),
  transition('* <=> *', [animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')]),
]);

export const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1,
      display: 'flex',
    })
  ),
  state(
    'out',
    style({
      opacity: 0,
      display: 'none',
    })
  ),
  transition('in => out', [animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')]),
  transition('out => in', [animate('200ms cubic-bezier(0.86, 0, 0.07, 1)')]),
]);

export const itemsAppearingOnTop = trigger('itemsAppearingOnTop', [
  transition(':enter', [
    query('.wrap__animations-items-appearing-on-top', [
      style({ opacity: 0, transform: 'translateY(-100px)' }),
      stagger(25, [
        animate('200ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ]),
]);
