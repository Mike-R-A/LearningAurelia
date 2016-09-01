import {DataService} from 'Services/DataService';
import {inject} from 'aurelia-framework';

@inject(DataService)
export class applicationRow{
    constructor(dataService){
        this.dataService = dataService;
        this.applicationForm = this.dataService.getApplicationForm();
        this.personalDetailsSection = this.applicationForm.personalDetailsSection;
        this.incompleteQualifications = this.applicationForm.qualificationDetailsSection.incompleteQualifications;
        this.incompleteQualifications.strings = this.applicationForm.qualificationDetailsSection.strings;
        this.completedQualifications = this.applicationForm.qualificationDetailsSection.completedQualifications;
        this.completedQualifications.strings = this.applicationForm.qualificationDetailsSection.strings;
        this.predictedGrades = this.applicationForm.qualificationDetailsSection.predictedGrades;
        this.courseDetailsSection = this.applicationForm.courseDetailsSection;
        this.toolBarSection = this.applicationForm.toolBarSection;
        this.results = this.applicationForm.qualificationDetailsSection.results;
        this.results.strings = this.applicationForm.qualificationDetailsSection.strings;
    }
}