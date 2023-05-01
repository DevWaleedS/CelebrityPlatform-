import React from "react";
import "./ContactBox.css";
import { ReactComponent as Svg_pager } from "../../../assets/Icon/Page-1.svg";
import { ReactComponent as Svg_mes } from "../../../assets/Icon/mess.svg";
import { ReactComponent as Svg_phone } from "../../../assets/Icon/phone.svg";
import GoogleMaps from "../../GoogleMaps/GoogleMaps";
const ContactBox = () => {
    return (
        <>
            <div className="contact-box mt-[48px]">
                <div className="container ">
                    <div className="content  w-full min-h-[892px] mb-[98px] py-[26px] px-[20px] flex max-[1280px]:gap-[40px]   flex-col-reverse min-[1280px]:flex-row  justify-between items-start">
                        <form
                            action=""
                            onClick={(e) => {
                                e.preventDefault();
                            }}
                            className="flex-1 max-w-[812px] flex gap-[20px] flex-col max-[1280px]:w-full max-[1280px]:mx-auto   justify-start items-start"
                        >
                            <div>
                                <h6>الإسم</h6>
                                <input
                                    type="text"
                                    placeholder="قم بإدخال اسمك"
                                />
                            </div>
                            <div>
                                <h6>البريد الإلكتروني</h6>
                                <input
                                    type="text"
                                    placeholder="قم بإدخال البريد الالكتروني الخاص بك"
                                />
                            </div>
                            <div>
                                <h6>رقم الجوال</h6>
                                <input type="text" placeholder="000000000" />
                            </div>
                            <div>
                                <h6>الموضوع</h6>
                                <input
                                    type="text"
                                    placeholder="عنوان الموضوع"
                                />
                            </div>
                            <div>
                                <h6>تفاصيل رسالتك</h6>
                                <textarea
                                    type="text"
                                    placeholder="قم بكتابة راسلتك بوضوح"
                                    className=" !h-[180px]"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className=" w-full max-[769px]:max-w-[200px] max-[769px]:h-[60px]  max-w-[260px] h-[70px] bg-[#0AB3D0] text-white mt-[20px] rounded-[8px] mx-auto"
                            >
                                ارسال
                            </button>
                        </form>
                        <div className="info w-full min-[1280px]:max-w-[357px] max-[1280px]:max-w-[812px]  bg-color-main-06 py-[18px] px-[20px] rounded-[4px] max-[1280px]:w-full max-[1280px]:mx-auto ">
                            <ul>
                                <h4>معلومات الإتصال</h4>
                                <a
                                    href="https://blog.celebrityads.net"
                                    target="blank"
                                    className=" flex justify-start items-center  gap-[14px]"
                                >
                                    <span>
                                        <Svg_pager />
                                    </span>
                                    celebrity.sa
                                </a>
                                <a
                                    href="mailto:info@celebrity.sa"
                                    target="blank"
                                    className=" flex justify-start items-center  gap-[14px]"
                                >
                                    <span>
                                        <Svg_mes />
                                    </span>
                                    info@celebrity.sa
                                </a>
                                <a
                                    href="tel:+9660506340450"
                                    target="blank"
                                    className=" flex justify-start items-center  gap-[14px]"
                                >
                                    <span>
                                        <Svg_phone />
                                    </span>
                                    <bdi>+9660506340450</bdi>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="box-map">
                    <GoogleMaps
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.539520552864!2d39.180307799999994!3d21.5257494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d12ea1952597%3A0xb9617c4fc62c243a!2z2KfZhNil2KrZgtin2YYg2LPZg9mI2YrYsSBBbGV0cWFuIFNxdWFyZQ!5e0!3m2!1sar!2seg!4v1682518742760!5m2!1sar!2seg"
                        width="100%"
                        height="415px"
                    />
                </div>
            </div>
        </>
    );
};

export default ContactBox;
