function Validator(options) {
    var formElement = document.querySelector(options.form);

    // Object will store request function
    var validatorRules = {
        required: function(value){
            return value ? undefined : "Please fill this input";
        },
        email: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return (regex.test(value)) ? undefined : "This input must be an email";
        },
        min: function(value,minValue){
            return (value.length>=minValue) ? undefined : `This input must be at least ${minValue} characters`;
        },
        confirmed: function(value,password){
            return (value==password) ? undefined : `Confirm password doesn't exact`
        },
    };

    var formRules = {};
    if(formElement) {
        var inputs=formElement.querySelectorAll('[name][rules]');
        for (var input of inputs){
            formRules[input.name]=[];
            var ruleElements = input.getAttribute('rules').split('&');
            for(var i in ruleElements) {
                ruleElements[i]=ruleElements[i].trim();
                if(ruleElements[i].includes(':')){
                    ruleElements[i]=ruleElements[i].split(':')[0];
                }
                formRules[input.name].push(validatorRules[`${ruleElements[i]}`]);
            }
    
            //Handle Event
            input.onblur = handleValidate;
            input.oninput = deleteValidate;
        }

        formElement.onsubmit = function(e) {
            e.preventDefault();
            var isSubmit=true;
            var isValid;
            for (var input of inputs) {
                isValid=handleValidate({
                    target: input
                });
                if(isValid) {
                    isSubmit=false;
                }
            };
            if(isSubmit) {
                var submit = options.onSubmit();
                console.log(submit);
            }
        }
        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorElement = getParent(event.target,options.formSelector).querySelector(options.errorSelector)
            var errorMessage;
            for (var rule of rules) {
                if(rule.toString() == validatorRules['required'].toString()) {
                    if(event.target.type=="radio" || event.target.type=="checkbox") {
                        if (event.target.type=="radio") {
                            errorMessage=rule(formElement.querySelector(options.radioSelector+':checked'));
                        } else {
                            errorMessage=rule(formElement.querySelector(options.checkboxSelector+':checked'));
                        }
                    } else {
                        errorMessage = rule(event.target.value);
                    }
                } else if (rule.toString() == validatorRules['email'].toString()){
                    errorMessage = rule(event.target.value);
                } else if (rule.toString() == validatorRules['min'].toString()){
                    var minValue = event.target.getAttribute('rules').split(':')[1];
                    errorMessage = rule(event.target.value,minValue);
                } else if (rule.toString() == validatorRules['confirmed'].toString()) {
                    var password=formElement.querySelector('input[name="password"]').value;
                    errorMessage = rule(event.target.value,password);
                } 

                if (errorMessage) {
                    errorElement.innerHTML = errorMessage;
                    getParent(event.target,options.formSelector).classList.add('invalid');
                    return Boolean(errorMessage);
                } else {
                    errorElement.innerHTML = '';
                    getParent(event.target,options.formSelector).classList.remove('invalid');
                }
            }
            return Boolean(errorMessage);
        }
        function deleteValidate(event) {
            getParent(event.target,options.formSelector).querySelector(options.errorSelector).innerHTML='';
            getParent(event.target,options.formSelector).classList.remove('invalid');
        }
    }
}

function getParent(element,selector) {
    while(element.parentElement) {
        if(element.parentElement.matches(selector)){
            return element.parentElement;
        }
        element=element.parentElement;
    }
}