import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

export const propuestaAnim = trigger('propuestaAnim', [
    transition('* => active', [
        query('.propuesta-container-items', style({opacity: 0, transform: 'translateY(40px)'})),
            query('.propuesta-container-items', stagger('600ms', [
                animate('1000ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
            ])),
            query('.propuesta-container-items', [
                animate(1, style('*'))
            ])
    ])
]);