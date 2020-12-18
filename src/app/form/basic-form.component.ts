import { Component, EventEmitter } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'basic-form',
    templateUrl: './basic-form.component.html',
    styleUrls: ['./basic-form.component.scss']
})

export class BasicFormComponent {
    submitted = false;
    persons = new Array;
    submitForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.min(2)]),
        age: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    })

    print = new EventEmitter();
 
    get submitFormControl() {
        return this.submitForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if(this.submitForm.invalid) {
            return;
        }
        const printedValue = this.submitForm.value;
        this.print.emit(printedValue);
        this.persons = this.persons?.concat(printedValue);
        console.log(this.persons)
        this.submitForm.reset('some val'); 
        this.submitted = false;
    }
}