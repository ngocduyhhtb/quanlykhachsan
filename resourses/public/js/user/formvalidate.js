var user = localStorage.getItem('user');
var pass = localStorage.getItem('pass')
Validator = (options) => {
    validate = (inputElement, rule) => {
        var errorMessage = rule.test(inputElement.value);
        var formMessage = inputElement.parentElement.querySelector(
            options.errorSelector
        );
        if (errorMessage) {
            formMessage.textContent = errorMessage;
            inputElement.style.border = options.borderError;
        } else {
            formMessage.textContent = "";
            inputElement.style.border = options.borderDefault;
        }
    };
    var formElement = document.querySelector(options.form);
    if (formElement) {

        // formElement.onsubmit = (e) => {
        //     e.preventDefault();
        // }
        options.rules.forEach((rule) => {
            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                };

                inputElement.oninput = () => {
                    var formMessage = inputElement.parentElement.querySelector(
                        options.errorSelector
                    );
                    formMessage.textContent = "";
                    inputElement.style.border = options.borderDefault;
                };
            }
        });
    }
};
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : message || "Vui lòng nhập trường này";
        },
    };
};
Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ?
                undefined :
                message || "Trường này phải là email";
        },
    };
};
Validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ?
                undefined :
                message || `Độ dài tối thiếu ${min} kí tự`;
        },
    };
};
Validator.isConfirm = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ?
                undefined :
                message || "Mật khẩu không khớp, thử lại";
        },
    };
};