import React from "react";
// import Img_0 from '../../../assets/Img'
import { ReactComponent as Svg_Ellipse } from "../../../assets/Icon/Ellipse 1.svg";
import { ReactComponent as Svg_Ellipse2 } from "../../../assets/Icon/Ellipse 2.svg";

import { ReactComponent as Svg_appStore } from "../../../assets/Icon/download-on-the-app-store-badge_us.svg";
import { ReactComponent as Svg_download } from "../../../assets/Icon/download.svg";
import { ReactComponent as Svg_google } from "../../../assets/Icon/google-play.svg";
import { ReactComponent as Svg_icon } from "../../../assets/Icon/icon.svg";
import { ReactComponent as Svg_icon2 } from "../../../assets/Icon/icon2.svg";
import Img_22 from "../../../assets/Img/22.png";
import Img_65 from "../../../assets/Img/65.png";
import Img_Book from "../../../assets/Img/Free_Book_Mockup_2.png";
import Img_Mockup from "../../../assets/Img/Mockup.png";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
const HomeBox = () => {
    return (
        <>
            <div className="overflow-hidden !overflow-y-auto">
                {/* <!--  start-hero --> */}
                <div className="section-1  ">
                    <Header />
                    <div className=" flex justify-center items-start h-[1280px] md:h-[1500px]  lg:h-[920px] 2xl:h-[850px]">
                        <div className="container flex-1 h-full flex flex-col justify-center items-center">
                            <div className="hero w-full flex h-full flex-col lg:flex-row">
                                <div className="  block mt-[100px]  lg:hidden h-[500px] md:h-[700px] ">
                                    <img
                                        src={Img_Mockup}
                                        className="w-full h-full object-cover"
                                        alt=""
                                    />
                                </div>
                                <div className="box-right flex-1 max-w-[582px] justify-start flex flex-col lg:justify-center items-start">
                                    <h1 className="text-color-main-01 md:">
                                        تطبيق المشاهير
                                    </h1>
                                    <h2>
                                        منصة المشاهير تعد المنصة الأولى عالمياً
                                        بخدماتها الحصرية
                                    </h2>
                                    <p className="text-color-main-02 font-bold">
                                        فهي تخدم مجال ( التسويق ، الإعلام ،
                                        إدارة الأعمال ) وتقدم خدمات متنوعة تفيد
                                        كل فئات المجتمع
                                    </p>
                                    <h4 className="!font-bold">
                                        قم بتحميل التطبيق من خلال
                                    </h4>
                                    <div className="box-store justify-center items-center gap-[23px]">
                                        <a href="#" className=" md:!w-[150px]">
                                            <Svg_appStore />
                                        </a>
                                        <a href="#">
                                            <Svg_google />
                                        </a>
                                    </div>
                                </div>
                                <div className="box-left flex-1 hidden lg:block">
                                    <div className="box-img   min-[1435px]:left-[-200px] ">
                                        <img
                                            src={Img_Mockup}
                                            className="w-full"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--  start-features --> */}
                <div id="app" className="featuer  mt-[100px] md:mt-[168px] ">
                    <div className="container flex justify-between items-center gap-[60px] lg:gap-0 flex-col lg:flex-row">
                        <div className="box-img-order  md:flex-1">
                            <div className="box-img">
                                <img src={Img_22} alt="" />
                            </div>
                            <div className="box-svg top-[80px] xl:top-[120px]">
                                <Svg_Ellipse />
                            </div>
                        </div>
                        <div className="box-left max-w-full flex-1 flex justify-center items-center">
                            <div className="box-content w-full flex flex-col justify-center  max-w-[536px] items-start gap-[30px]">
                                <div className="top bg-color-main-01 h-[96px] w-full flex justify-center items-center p-[20px] rounded-[4px]">
                                    <h4 className="text-color-main-03">
                                        مميزات التطبيق للمستخدم والتاجر
                                    </h4>
                                </div>
                                <ul className="box w-full flex flex-col justify-center items-center gap-[20px]   px-[18px] md:px-[20px]">
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon2 />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            ابحث عن مشهورك بسهولة وبحسب منطقتك
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon2 />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            سهولة استخدام التطبيق
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon2 />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            سهولة الطلب والتفاوض مع المشهور
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon2 />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            طلبات إعلان وإهداء متنوعة ومميزة
                                        </h4>
                                    </li>
                                    <div
                                        className="box-store justify-center items-center gap-[23px] mt-[61px] mb-[20px]

                                "
                                    >
                                        <a href="#" className=" md:!w-[150px]">
                                            <Svg_appStore />
                                        </a>
                                        <a href="#">
                                            <Svg_google />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featuer mt-[55px]">
                    <div className="container flex justify-between items-center gap-[60px] lg:gap-0 flex-col lg:flex-row">
                        <div className="box-left max-w-full flex-1 flex justify-center items-center">
                            <div className="box-content w-full flex flex-col justify-center  max-w-[536px] items-start gap-[30px]">
                                <div className="top bg-color-main-02 h-[96px] w-full flex justify-center items-center p-[20px] rounded-[4px]">
                                    <h4 className="text-color-main-03 ">
                                        مميزات التطبيق للمشهور
                                    </h4>
                                </div>
                                <ul className="box w-full flex flex-col justify-center items-center gap-[20px] px-[18px] md:px-[20px]">
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            متابعة عقود الإعلانات والطلبات{" "}
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            التوثيق عبر صفحات التواصل الإجتماعي
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            سجل الفواتير وتفاصيل كل فاتورة
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            معرفة رصيدك الحالي وأرباحك في المنصة
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            إمكانية تسعير الإعلانات والاهداءات
                                            وطلبات المساحة الاعلانية الخاصة بك{" "}
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            متابعة آخر الطلبات الواردة من
                                            المتابعين
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            إنشاء علامة تجارية خاصة بك{" "}
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            إنشاء أكواد خصم لتحفيز المتابعين على
                                            الطلب
                                        </h4>
                                    </li>
                                    <li className="flex justify-center items-center gap-[12px] md:gap-[23px]">
                                        <span>
                                            <Svg_icon />
                                        </span>
                                        <h4 className="text-color-main-04">
                                            متابعة مواعيدك المرتبطة بطلبات
                                            المتابعين
                                        </h4>
                                    </li>

                                    <div className="box-store justify-center items-center gap-[23px] mt-[61px] mb-[20px]">
                                        <a href="#" className=" md:!w-[150px]">
                                            <Svg_appStore />
                                        </a>
                                        <a href="#">
                                            <Svg_google />
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="box-img-order  md:flex-1">
                            <div className="box-img">
                                <img src={Img_65} alt="" />
                            </div>
                            <div className="box-svg top-[80px] xl:top-[120px]">
                                <Svg_Ellipse2 />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--  end-features --> */}
                {/* <!-- start-book   --> */}
                <div id="book" className="book mt-[76px] ">
                    <div className="container flex flex-col justify-center items-center gap-[40px] lg:gap-0 lg:flex-row">
                        <div className="box-img">
                            <img src={Img_Book} alt="" />
                        </div>
                        <div className="box-content flex justify-center items-center max-w-[100%] ">
                            <div className="box bg-color-main-05  pt-[50px] pb-0 px-[25px] sm:pt-[72px] sm:pb-0 sm:px-[53px]  w-full max-w-[674px] flex justify-start flex-col gap-[30px]  rounded-[16px]   h-[443px] text-center items-center">
                                <p className=" text-color-main-04">
                                    هدية لك لتتعرف على التسويق والتسويق
                                    الإلكتروني وما يقدمه تطبيق ومنصة المشاهير
                                    والنقلة النوعية في التسويق عبر المشاهير
                                </p>
                                <h4 className="!font-[700]">
                                    نقدم لك كتاب التسويق الإلكتروني
                                </h4>
                                <a
                                    download=""
                                    href="#"
                                    className="w-full max-w-[398px] flex justify-center rounded-full items-center gap-[20px]  flex-row-reverse"
                                >
                                    تحميل الكتاب الآن
                                    <span>
                                        <Svg_download />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- book-end   --> */}
                <div className=" mt-[100px] md:mt-[166px] "></div>

                <Footer />
            </div>
        </>
    );
};

export default HomeBox;
