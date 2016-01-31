'use strict';

var invoiceService = require("../services/invoiceService");
var paymentValidator = require("../lib/paymentValidator");

var newInvoiceHandler = (req, res) => {

    let newInvoice = {
        totalAmount: req.body.paymentType === 'noContribute' ? 1 : req.body.totalAmount,
        paymentType: req.body.paymentType,
        stripeToken: req.body.stripeToken,
        invoiceId: req.body.invoiceId
    };

    let validationErrors = paymentValidator.isValid(newInvoice);

    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors});
    }

    return invoiceService.payForInvoice(newInvoice)
        .then(sendResponseToUser(res))
        .catch(handleError(res));
};

function sendResponseToUser(res) {
    return function() {
        res.status(200).json();
    }
}

function handleError(res) {
    return function(error) {
        res.status(500).json({errors: [error]});
    }
}

module.exports = {
    newInvoiceHandler: newInvoiceHandler
};
