/**
 * 
 * @param {any} x 
 * @returns {Array}
 * 
 * If an input is not an array the function will return a one lenght array with the original value.
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
 * 
 * Cheeks for is the the text is a valid email address.
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
 * 
 * Creates a mailto link with all the different optings and information it can use. 
 * Like the emeail address, cc, bcc, subject and the body that can be text only.
 * This can save time for the client when they presss the mailto link that has not 
 * only the relevent address but also the correct subjucet and such. 
 */
function createTheMailtoLink(list_address, subject, list_cc, list_bcc, text_body) {
    
    const sep = ",";
    /**
     * @type {string}
     */
    let address = "";
    if (Boolean(list_address)){
        address = ensureArray(list_address).
        filter((value, index, array)=>{ return validateEmail(value);}).
        join(sep);
    }
    /**
     * @type {URL}
     */
    let link = new URL("mailto:" + address);
    if (Boolean(subject)) {
        link.searchParams.append("subject", subject);
    }
    if(Boolean(list_cc) && list_cc.length > 0){
        link.searchParams.append("cc", ensureArray(list_cc).
        filter((value, index, array)=>{ return validateEmail(value);}).
        join(sep));
    }
    if(Boolean(list_bcc) && list_bcc.length > 0){
        link.searchParams.append("bcc", ensureArray(list_bcc).
        filter((value, index, array)=>{ return validateEmail(value);}).
        join(sep));
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

// /** */
// function addToArrayDef(array) {
//     return (item)=>{
//         array.push(item)
//     }
// }
