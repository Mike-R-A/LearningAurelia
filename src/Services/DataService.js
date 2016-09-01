export class DataService{
    getApplicationForm(){
        return {
            personalDetailsSection: {
                    personalDetails: {  
                        firstname: 'Mike', 
                        surname: 'Ashford', 
                        dateOfBirth: '1983/09/26',
                        ucasPersonalId: '1234567890',
                        title: 'Mr',
                        gender: 'Male',
                        wantsWelshCommunication: 'No',
                    }, 
                    strings:{
                        sectionHeader: 'Personal Details',
                        firstname: 'First Name',
                        surname: 'Surname',
                        dateOfBirth: 'Date of birth',
                        ucasPersonalId: 'UCAS PID',
                        title: 'Title',
                        gender: 'Gender',
                        wantsWelshCommunication: 'Welsh comms?'}
                    }, 
            qualificationDetailsSection: {
                incompleteQualifications: [
                    {qualificationDate: '10/2016', type: 'Pluralsight', subject: 'Aurelia'}
                ],
                completedQualifications: [
                    {qualificationDate: '06/2006', type: 'A level', subject: 'Physics', grade: 'A'},
                    {qualificationDate: '06/2006', type: 'A level', subject: 'Chemistry', grade: 'A'},
                    {qualificationDate: '06/2006', type: 'A level', subject: 'Maths', grade: 'A'}
                ],
                predictedGrades: 'Aurelia: A',
                results: [
                    {qualificationDate: '10/2016', type: 'Pluralsight', subject: 'Aurelia', grade: 'A*'},
                ],
                strings: {
                    sectionHeader: 'Qualification Details',
                    incompleteQualificationsHeader: 'Incomplete Qualifications',
                    completedQualificationsHeader: 'Completed Qualifications',
                    resultsHeader: 'Results',
                    qualificationDate: 'Date',
                    type: 'Type',
                    subject: 'Subject',
                    grade: 'Grade',
                    predictedGrades: 'Predicted Grades'}
                },
            courseDetailsSection: {
                courseDetails: {
                    courseCode: 'F400',
                    courseTitle: 'MPhys Physics',
                    yearOfEntry: '2002',
                    monthOfEntry: 'September',
                    entryLevel: '1',
                    choice: '1',
                    applicationSchemeCode: 'UC01',
                    applicationsThisCycleCourseCode: '',
                    applicationsPreviousCyclesCourseCode: ''},
                strings: {
                    sectionHeader: 'Course Details',
                    course: 'Course',
                    yearOfEntry: 'Year of entry',
                    monthOfEntry: 'Month of entry',
                    entryLevel: 'Entry level',
                    choice: 'Choice',
                    applicationSchemeCode: 'Application Scheme',
                    applicationsThisCycleCourseCode: 'Applications this cycle',
                    applicationsPreviousCyclesCourseCode: 'Applications in previous cycles'
                }
            },
            toolBarSection : {
                strings: {
                    sectionHeader: 'Toolbar'
                }
            },
            decisionDetails : {
                decision : ""
            },
            NationalityFeeStatusSection: {
                nationality: 'British',
                residentialCategory: '1',
                areaOfPermanentResidence: 'UK',
                dateOfFirstEntryInUK: ''
            },
            personalStatement: '',
            referenceSection: {
                referee: 'Fred Jones',
                refereePost: 'Head of Year',
                organisation: 'St Teilos High School',
                email: 'fredjones@school.com',
                phoneNumber: '01234 567890',
                reference: 'Mike is awesome.'
            },
            contactDetailsSection: {
                contactAddress: {
                    line1:'',
                    line2:'',
                    line3:'',
                    line4:'',
                    line5:'',
                    postcode:'',
                    email:'',
                    telephone:'',
                    mobile:''
                },
                homeAddress: {
                    line1:'',
                    line2:'',
                    line3:'',
                    line4:'',
                    line5:'',
                    postcode:'',
                    email:'',
                    telephone:'',
                    mobile:''
                }
            },
        };
    }
}