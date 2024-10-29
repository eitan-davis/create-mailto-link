import { createApp } from './petite-vue.es.js';

        let app = createApp({
            email_form_item: {
                address: {
                    field_name: "email address",
                    placeholder: "email",
                    list: [{value:""}]
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
            output_value: "",
            create_link() {
                this.output_value = createTheMailtoLink(
                this.email_form_item.address.list.map((value,index,array)=>{return value.value;}),
                this.email_form_item.subject.value,
                this.email_form_item.cc.list.map((value,index,array)=>{return value.value;}),
                this.email_form_item.bcc.list.map((value,index,array)=>{return value.value;}),
                this.email_form_item.body.value).
                toString();
            },
        }).mount("#mainapp");