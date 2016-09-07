import {DataService} from 'Services/DataService';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class applicationForm{
    constructor(dataService){
        this.dataService = dataService;
        this.applicationForm = this.dataService.getApplicationForm();
        this.strings = this.dataService.getApplicationStrings();
        this.personalDetailsSection = this.applicationForm.personalDetailsSection;
        this.personalDetailsSection.strings = this.strings.personalDetailsSection;
        this.qualificationDetailsSection = this.applicationForm.qualificationDetailsSection;
        this.qualificationDetailsSection.strings = this.strings.qualificationDetailsSection;
        this.courseDetailsSection = this.applicationForm.courseDetailsSection;
        this.courseDetailsSection.strings = this.strings.courseDetailsSection;
        this.toolBarSection = this.strings.toolBarSection;
    }
}