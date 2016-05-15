import {Control, ControlGroup} from "angular2/common";

/*
 Custom validators to use everywhere.
 */

// SINGLE FIELD VALIDATORS
export function emailValidator(control: Control): {[key: string]: any} {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && control.value.length < 6 && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export const emailRegexp = '^[a-z0-9!#$%&\'*+\\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$';

//CONTROL GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }

    }
}