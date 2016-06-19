export const Resources = {
  privacyPolicy: 'https://pirateparty.org.au/privacy/',
  branchListEndPoint: 'branches',
  myBranchListEndPoint: 'admin/branches',
  registerEndPoint: 'register',
  groupListEndPoint: 'groups',
  networkAdminEndPoint: 'admins',
  contactEmail: 'rabblerouserproject@gmail.com',
  homePage: 'https://rabblerouser.team/',
};

export const ApplicationForm = {
  instructions: 'Please fill in the following information and we\'ll let you know when space becomes available at ' +
    'your preferred branch.',
  branchPlaceholder: 'Select branch',
  byoReminder: 'Please be aware that members will need to bring their own laptop.',
  ageReminder: 'Please note that our target age is between 10 and 16 years',
  additionalInfoAside: 'Is there anything else you think we should know?',
  submitButton: 'Submit',
  validationErrorTitle: 'Please check the following fields:',
  remoteSubmitErrorTitle: 'Sorry, we could not register you this time. Please try again, or contact us at ' +
  `${Resources.contactEmail}`,
  branchListErrorTitle: 'Sorry, we could not get the list of available branches at this time. Please try again, ' +
  `or contact us at ${Resources.contactEmail}`,
};

export const AdminDashboard = {
  RemoteSaveErrorMessage: 'Sorry, there was an issue saving the change. Please try again or contact ' +
  `${Resources.contactEmail} for support.`,
};

export const ApplicationFormFieldLabels = {
  contactName: 'First name',
  contactLastName: 'Last name',
  contactEmail: 'Email address',
  contactNumber: 'Contact number',
  memberName: 'First name',
  memberLastName: 'Last name',
  memberBirthYear: 'Member\'s year of birth',
  branchSelection: 'Branch to join',
  additionalInfo: 'Additional information',
  groupName: 'Group name',
  groupDescription: 'Description',
  pastoralNotes: 'Pastoral notes',
  name: 'Name',
  password: 'Password',
  confirmedPassword: 'Confirm password',
  notes: 'Branch notes',
  contact: 'Contact information',
};

export const FormValidationErrors = {
  contactName: { name: 'Contact first name', message: 'Please enter a contact name. No symbols allowed.' },
  contactLastName: { name: 'Contact last name', message: 'No symbols allowed.' },
  contactEmail: { name: 'Email address', message: 'Please enter a valid email address i.e. valid@email.com' },
  contactNumber: { name: 'Contact number', message: 'Please enter a valid phone number.' },
  memberName: {
    name: 'Member first name',
    message: 'Please enter the member\'s name. No symbols allowed.',
  },
  memberLastName: { name: 'Member last name', message: 'No symbols allowed.' },
  memberBirthYear: { name: 'Member\'s year of birth', message: 'Please select the year of birth.' },
  branchSelection: { name: 'Branch to join', message: 'Please select a branch to join.' },
  additionalInfo: { name: 'Additional info', message: 'Maximum 2000 characters' },
  pastoralNotes: { name: 'Pastoral notes', message: 'Maximum 2000 characters' },
  groupName: { name: 'Name', message: 'Please enter a group name. No symbols allowed.' },
  groupDescription: { name: 'Description', message: 'Please enter a description (maximum 2000 characters).' },
  name: { name: 'Name', message: 'Please enter a name. No symbols allowed.' },
  confirmedPassword: { name: 'Confirm password', message: 'Passwords must match' },
  password: { name: 'Password', message: 'Passwords must be at least 12 characters' },
};
