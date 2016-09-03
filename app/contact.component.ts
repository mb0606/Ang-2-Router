import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';


@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate {
    constructor(private _router: Router){

    }
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }

    routerCanDeactivate(next, previous){
        console.log("next ++++++++", next);
        console.log("prevous ++++++++", previous);
        // if(this.form.dirty)
        // you would need to have a model driven form to check if it is dirty
        return confirm("Are you sure");
    }
}