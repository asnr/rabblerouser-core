'use strict';

const inputValidator = require('./inputValidator');
const _ = require('lodash');

const isValidBranch = name =>
  inputValidator.isValidString(name, new RegExp('[<>"%;&+]')) && name.length < 256;

const memberFieldsChecks = {
  contactFirstName: inputValidator.isValidName,
  contactLastName: inputValidator.isValidOptionalName,
  email: inputValidator.isValidEmail,
  primaryPhoneNumber: inputValidator.isValidPhone,
  firstName: inputValidator.isValidName,
  dateOfBirth: inputValidator.isValidDate,
  branchId: isValidBranch,
  additionalInfo: inputValidator.isValidOptionalTextBlock,
  pastoralNotes: inputValidator.isValidOptionalTextBlock,
};

const isValidDetails = member =>
  _.reduce(memberFieldsChecks, (errors, checkFn, memberFieldKey) => {
    if (!member || !checkFn(member[memberFieldKey])) {
      errors.push(memberFieldKey);
    }
    return errors;
  }, []);

const isValid = member => {
  const errors = [isValidDetails(member)];
  return _.flatten(errors);
};

module.exports = {
  isValid,
};
