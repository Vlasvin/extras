export interface VisaFormData {
  personalInfo: {
    passportLostDetails?: string;
    otherPassportDetails?: string;
    otherMediaResourceDetails?: string;
    surname: string;
    givenName: string;
    patronymic: string;
    photo: FileList;
    passportCopy: FileList;
    passportDetails: string;
    passportOrInn: string;
    otherNames: string;
    birthPlaceAndDate: string;
    passportLost: boolean;
    otherCitizenship: boolean;
    residenceAddress: string;
    registeredAddress: string;
    contactNumber: string;
    contactNumbersLast5Years: string;
    emailAddress: string;
    emailsLast5Years: string;
    socialMedia: string;
    socialMediaFile: FileList;
    otherMediaResources: boolean;
  };
  familyInfo: {
    fatherName: string;
    fatherDOB: Date;
    motherName: string;
    motherDOB: Date;
    parentsInUSA: string;
    maritalStatus: string;
    spouseName: string;
    spouseMaidenName: string;
    spouseDOB: Date;
    spouseBirthPlace: string;
    spouseNationality: string;
    spouseAddress: string;
    previousMarriages: string;
    previousSpouses?: string;
    previousSpouseDOB?: Date;
    marriageStartDate?: Date;
    marriageEndDate?: Date;
    previousSpouseBirthPlace?: string;
    previousSpouseNationality?: string;
    relativesInUSA: string;
    relativeNames?: string;
    relativeStatus?: string;
    otherRelativesInUSA: string;
  };
  purposeOfTravel: {
    travelPlans: {
      arrivalDate: string;
      arrivalCity: string;
      placesToVisit: string;
    };
    addressInUSA: string;
    invitingParty: {
      name: string;
      phone: string;
      email: string;
      relationship: string;
    };
    durationOfStay: string;
    tripFunding: string;
    travelPurpose: string;
    travelCompanions: string;
    tripSponsor: string;
    sponsorInfo: {
      surname?: string;
      name?: string;
      address?: string;
      phone?: string;
      email?: string;
      relationship?: string;
    };
  };
  travelHistory: {
    countriesVisited: string;
    visitedUSA: string;
    visaDates?: string;
    visaNumber?: string;
    visaDenied: string;
    denialDate?: string;
    denialPlace?: string;
    denialType?: string;
    previousTravel: string;
    arrivalDate0?: string;
  };
  workAndEducation: {
    currentOccupation: string;
    previousOccupations?: string;
    employerDetails: string;
    employerAddress: string;
    workAddress: string;
    previousEmployers?: string;
    educationLevel: string;
    degrees?: string;
    schoolsAttended: string;
    averageMonthlyIncome: number;
    fundingSource?: string;
    otherIncomeSources?: string;
  };
}
