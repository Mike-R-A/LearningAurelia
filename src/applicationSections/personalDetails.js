import {Helper} from 'Helper';
import {inject} from 'aurelia-framework';

@inject(Helper)
export class personalDetails{
    constructor(helper){
        this.helper = helper;
    }    
    activate(model){
        this.personalDetails = model.personalDetails;
        this.age = this.helper.calculateAge(this.personalDetails.dateOfBirth);
        this.strings = model.strings
    }    
}