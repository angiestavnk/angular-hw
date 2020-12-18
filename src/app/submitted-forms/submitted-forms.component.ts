import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'submitted-form',
    templateUrl: './submitted-form.component.html',
    styleUrls: ['./submitted-form.component.scss']
})

export class SubmittedForm implements OnInit {
    @Input() submit: any;
    ngOnInit(): void {}
}