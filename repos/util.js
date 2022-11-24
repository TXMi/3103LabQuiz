export default function validate(keyword) {
    var isValid = true

    if (keyword) {
        if (isXSS(keyword)) {
            isValid &= false
        }

        if (isSqlInject(keyword)) {
            isValid &= false
        }
    } else {
        isValid &= false
    }

    return isValid
}

export const isXSS = (input) => {
    const prohibited = ['javascript:', '<script>', '</script>', '(\'', '(\"', '\')', '\")']
    isValid = true

    if (input) {
        for (var i = 0; i < prohibited.length; i++) {
            if (input.toLowerCase().indexOf(prohibited[i]) > -1) {
                isValid &= false;
                break;
            }
        }
    } else {
        isValid = false
    }

    return isValid
}

export const isSqlInject = (input) => {}