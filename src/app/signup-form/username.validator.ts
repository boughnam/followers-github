import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidator {

    static cannotContainSpaces(control : AbstractControl) : ValidationErrors | null {
        if((control.value as String).indexOf(' ') >= 0){ // parceque si on trouve un espace on retourne -1
            return {
                cannotContainSpaces: true
            }
        }

        return null;

    }
}