/**
 * 
 * @param {any} x 
 * @returns {Array}
 */
function ensureArray(x){
    if (Array.isArray(x)){
        return Array(x)
    } else {
        return x;
    }
}


/**
 * 
 * @param {any} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


/**
 * 
 * @param {string|Array<string>} list_address 
 * @param {string} subject 
 * @param {string|Array<string>} list_cc 
 * @param {string|Array<string>} list_bcc 
 * @param {string} text_body 
 * @returns {String}
 */
function createTheMailtoLink(list_address, subject, list_cc, list_bcc, text_body) {
    
    const sep = ",";
    /**
     * @type {string}
     */
    let address = "";
    if (Boolean(list_address)){
        address = ensureArray(list_address).
        filter((value, index, array)=>{ validateEmail(value)}).
        join(sep);
    }
    /**
     * @type {URL}
     */
    let link = new URL("mailto:" + address);

    if (Boolean(subject)) {
        link.searchParams.append("subject", subject);
    }
    if(Boolean(list_cc)){
        link.searchParams.append("cc", ensureArray(list_cc).filter((value, index, array)=>{
            if (validateEmail(value)) {
                    
            }
        }).join(sep));
    }
    if(Boolean(list_bcc)){
        link.searchParams.append("bcc", ensureArray(list_bcc).join(sep));
    }
    if(Boolean(text_body)){
        link.searchParams.append("body", text_body);
    }
    return link;
    //encodeURIComponent
}

/**
 * 
 * @param {Array} array 
 * @param {*} item 
 */
function addToArray(array, item) {
    array.push(item)
}

/** */
function addToArrayDef(array) {
    return (item)=>{
        array.push(item)
    }
}
