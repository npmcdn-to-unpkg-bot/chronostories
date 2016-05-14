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

    private get _baseSequence(): CssAnimationBuilder {
        return this._animation
            .setDuration(250) // the transition duration
            .removeClass('collapse') // remove a class before the transition start
            .removeClass('in')
            .addAnimationClass('collapsing'); // add a temp class for the transition period
    }

    hide(): void {
        this._baseSequence
            .setFromStyles({
                height: this._el.nativeElement.scrollHeight + 'px'
            })
            .setToStyles({
                height: '0'
            });

        // a is the Animation instance running this animation.
        let a = this._animation.start(this._el.nativeElement);
        a.onComplete(() => {
            a.removeClasses(['in']); // rapid change will leave 'in'
            a.addClasses(['collapse'])
        });
    }

    show(): void {
        this._animation // 1st animation build
            .setDuration(0)
            .addClass('collapse')
            .addClass('in')
            .setFromStyles({
                overflow: 'hidden'
            })
            .start(this._el.nativeElement) // 1st animation start
            .onComplete(() => {
                let a = this._baseSequence //  2nd animation build
                    .setFromStyles({
                        height: '0'
                    })
                    .setToStyles({
                        height: this._el.nativeElement.scrollHeight + 'px'
                    })
                    .start(this._el.nativeElement); // 2nd animation start

                a.onComplete(() =>  a.addClasses(['collapse', 'in']) );
            });
    }
}