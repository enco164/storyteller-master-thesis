import {animate, state, style, transition, trigger} from '@angular/animations';

export namespace Animations {
  export const fadeOut = trigger('fadeOut', [
    transition(':leave', [
      animate('0.25s ease-in', style({opacity: 0}))
    ])
  ]);
}
