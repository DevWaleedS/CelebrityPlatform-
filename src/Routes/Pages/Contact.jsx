import React from "react";
import { ContactBox, TitleBox } from "../../components";

const Contact = () => {
    return (
        <>
            <TitleBox
                title={`اتصل بنا`}
                description={`قم بملئ نموذج التواصل الخاص بنا وسنقوم بالرد عليك في أقرب وقت`}
            />
            <ContactBox />
        </>
    );
};

export default Contact;
