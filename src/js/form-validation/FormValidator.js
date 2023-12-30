export default class FormValidator {

    formElements;

    constructor(form){
        if(form?.nodeName !== 'FORM') throw new Error('Must provide a form element in this object\'s constructor');
        this.form = form;
    }

    addValidator(validatorElement){
        
    }
}