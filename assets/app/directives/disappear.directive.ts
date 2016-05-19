import {Directive, OnChanges, ElementRef, Input} from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
import {CssAnimationBuilder} from 'angular2/src/animate/css_animation_builder';

@Directive({
    selector: '[disappear]'
})

export class Disappear implements OnChanges {
    @Input() disappear: boolean;
    private _animation: CssAnimationBuilder;

    constructor(animationBuilder:AnimationBuilder, private _el:ElementRef) {
        this._animation = animationBuilder.css();
    }

    ngOnChanges(changes) {
        // if the change happened in the disappear property
        if (changes.disappear) {
            if (this.disappear) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    hide(): void {
        let animation = this._animation
            .setDuration(100)
            .setFromStyles({
                'opacity' : 1,
                'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
            })
            .setToStyles({
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
            .setDuration(100)
            .setFromStyles({
                'opacity' : 0,
                'transition-timing-function': 'cubic-bezier(0.575, 0.255, 0.440, 0.985);'
            })
            .setToStyles({
                'opacity' : 1
            });

        // a is the Animation instance running this animation.
        let a = animation
            .start(this._el.nativeElement);
        a.onComplete(() => {
        });
   }
}