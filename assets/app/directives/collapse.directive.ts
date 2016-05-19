import {Directive, OnChanges, ElementRef, Input} from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
import {CssAnimationBuilder} from 'angular2/src/animate/css_animation_builder';

@Directive({
    selector: '[collapse]'
})

export class Collapse implements OnChanges {
    @Input() collapse: boolean;
    private _animation: CssAnimationBuilder;

    constructor(animationBuilder:AnimationBuilder, private _el:ElementRef) {
        this._animation = animationBuilder.css();
    }

    ngOnChanges(changes) {
        // if the change happened in the collapse property
        if (changes.collapse) {
            if (this.collapse) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    hide(): void {
        let animation = this._animation
            .setDuration(350)
            .setFromStyles({
                'flex-grow': 1,
                'opacity' : 1,
                'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
            })
            .setToStyles({
                'flex-grow': 0,
                'opacity' : 0
            });

        // a is the Animation instance running this animation.
        let a = animation
            .start(this._el.nativeElement);
        a.onComplete(() => {
        });
    }

    show(): void {
        let animation = this._animation
            .setDuration(350)
            .setFromStyles({
                'flex-grow': 0,
                'opacity' : 0,
                'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
            })
            .setToStyles({
                'flex-grow': 1,
                'opacity' : 1
            });

        // a is the Animation instance running this animation.
        let a = animation
            .start(this._el.nativeElement);
        a.onComplete(() => {
        });
   }
}