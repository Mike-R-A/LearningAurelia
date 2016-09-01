export class courseDetails{
    activate(model){
        this.courseDetails = model.courseDetails;
        this.strings = model.strings
        this.courseDisplayName = this.courseDetails.courseCode + " " + this.courseDetails.courseTitle;
    }    
}