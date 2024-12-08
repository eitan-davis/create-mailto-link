import { createApp } from './petite-vue.es.js';
//import { createApp } from 'petite-vue';


// petit-vue app
let app = createApp({
    // contians all the data for creating a mail to link.
    email_form_item: {
        address: {
            field_name: "email address",
            placeholder: "email",
            list: [{ value: "" }]
        },
        cc: {
            field_name: "cc",
            placeholder: "email cc",
            list: []
        },
        bcc: {
            field_name: "bcc",
            placeholder: "email bcc",
            list: []
        },
        subject: {
            field_name: "subject",
            placeholder: "subject",
            value: ""
        },
        body: {
            field_name: "body",
            placeholder: "text",
            value: "",
        },
    },

    // this it the final mailto link using the email_form_item information.
    output_value: "",
    
    // updates the value "output_link" using the function createTheMailtoLink from maim.js . 
    create_link() {
        this.output_value = createTheMailtoLink(
            this.email_form_item.address.list.map((value, index, array) => { return value.value; }),
            this.email_form_item.subject.value,
            this.email_form_item.cc.list.map((value, index, array) => { return value.value; }),
            this.email_form_item.bcc.list.map((value, index, array) => { return value.value; }),
            this.email_form_item.body.value).
            toString();
    },
    // copies the mailto link to the clipbord.
    copy_email(){
        navigator.clipboard.writeText(this.output_value);
    }
}).mount("#mainapp");