import React from "react";
import TitleBox from "../../TitleBox/TitleBox";
import "./TermsBox.css";
const TermsBox = () => {
    return (
        <>
            <div className="term-box min-h-[100vh]">
                <TitleBox
                    title={`الشروط والأحكام`}
                    description={`هنا نوضح لك الشروط والأحكام التي تتبعها المنصة وفق النظام المعتمد`}
                />
                <div className="container h-full flex justify-center items-center mt-[48px]">
                    <div className="content min-h-[681px] w-full py-[43px] px-[30px] md:px-[58px] flex gap-[43px] flex-col justify-start items-start">
                        <div className="box flex-col justify-start items-start">
                            <h6>هذا النص هو مثال </h6>
                            <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
                                من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                                يولدها التطبيق. هذا النص هو مثال لنص يمكن أن
                                يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                                مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
                                أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                                الحروف التى يولدها التطبيق.
                            </p>
                        </div>
                        <div className="box flex-col justify-start items-start">
                            <h6>هذا النص هو مثال </h6>
                            <p>
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                                المساحة، لقد تم توليد هذا النص من مولد النص
                                العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
                                من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                                يولدها التطبيق. هذا النص هو مثال لنص يمكن أن
                                يستبدل في نفس المساحة، لقد تم توليد هذا النص من
                                مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
                                أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                                الحروف التى يولدها التطبيق.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TermsBox;
