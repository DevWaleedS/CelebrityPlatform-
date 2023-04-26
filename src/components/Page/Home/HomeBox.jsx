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
const HomeBox = ({children}) => {
    return (
        <>
            <div className="overflow-hidden !overflow-y-auto">
                {/* <!--  start-hero --> */}
                <div className="section-1  ">
                    {children}
                    <div className=" flex justify-center items-start h-[1400px] md:h-[1500px]  lg:h-[920px] 2xl:h-[850px]">
                        <div className="container flex-1 h-full flex flex-col justify-center items-center">
                            <div className="hero w-full flex h-full flex-col lg:flex-row">
                                <div className="  block  lg:hidden h-[500px] md:h-[700px] ">
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
                                    <div className="box-img  xl:left-[-200px]">
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
                                        <a href="#" className="">
                                            <img
                                                src="./Icon/download-on-the-app-store-badge_us.svg"
                                                alt=""
                                            />
                                        </a>
                                        <a href="#">
                                            {/* <svg id="google-play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="186.2" height="55.17" viewBox="0 0 186.2 55.17">
                  <defs>
                    <linearGradient id="linear-gradient" x1="0.908" y1="1.032" x2="-0.383" y2="0.36"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#00a0ff" />
                      <stop offset="0.007" stop-color="#00a1ff" />
                      <stop offset="0.26" stop-color="#00beff" />
                      <stop offset="0.512" stop-color="#00d2ff" />
                      <stop offset="0.76" stop-color="#00dfff" />
                      <stop offset="1" stop-color="#00e3ff" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="1.077" y1="0.729" x2="-1.307" y2="0.729"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#ffe000" />
                      <stop offset="0.409" stop-color="#ffbd00" />
                      <stop offset="0.775" stop-color="orange" />
                      <stop offset="1" stop-color="#ff9c00" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="0.864" y1="-0.023" x2="-0.499" y2="-1.789"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#ff3a44" />
                      <stop offset="1" stop-color="#c31162" />
                    </linearGradient>
                    <linearGradient id="linear-gradient-4" x1="-0.186" y1="2.701" x2="0.423" y2="1.909"
                      gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="#32a071" />
                      <stop offset="0.069" stop-color="#2da771" />
                      <stop offset="0.476" stop-color="#15cf74" />
                      <stop offset="0.801" stop-color="#06e775" />
                      <stop offset="1" stop-color="#00f076" />
                    </linearGradient>
                  </defs>
                  <path id="Path_24" data-name="Path 24"
                    d="M179.3,55.17H6.9a6.829,6.829,0,0,1-6.9-6.9V6.9A6.829,6.829,0,0,1,6.9,0H179.3a6.829,6.829,0,0,1,6.9,6.9V48.274A6.829,6.829,0,0,1,179.3,55.17Z" />
                  <path id="Path_25" data-name="Path 25"
                    d="M179.3,1.1A5.828,5.828,0,0,1,185.1,6.9V48.274a5.828,5.828,0,0,1-5.793,5.793H6.9A5.828,5.828,0,0,1,1.1,48.274V6.9A5.828,5.828,0,0,1,6.9,1.1H179.3m0-1.1H6.9A6.916,6.916,0,0,0,0,6.9V48.274a6.829,6.829,0,0,0,6.9,6.9H179.3a6.829,6.829,0,0,0,6.9-6.9V6.9A6.916,6.916,0,0,0,179.3,0Z"
                    fill="#a6a6a6" />
                  <path id="Path_26" data-name="Path 26"
                    d="M49.676,11.452a3.757,3.757,0,0,1-.965,2.759,4.276,4.276,0,0,1-7.31-3.034A4.239,4.239,0,0,1,45.676,6.9a3.672,3.672,0,0,1,1.655.414,3,3,0,0,1,1.241.965l-.69.69A2.572,2.572,0,0,0,45.676,8a2.744,2.744,0,0,0-2.207.965,2.841,2.841,0,0,0-.965,2.345,2.841,2.841,0,0,0,.965,2.345,3.552,3.552,0,0,0,2.207.965,3.025,3.025,0,0,0,2.345-.965A2.284,2.284,0,0,0,48.71,12H45.676V10.9h4v.552ZM56.02,8H52.3v2.621h3.448v.965H52.3V14.21H56.02v1.1H51.193V7.038H56.02Zm4.552,7.31h-1.1V8H57.124V7.038h5.793V8H60.572Zm6.345,0V7.038h1.1v8.276Zm5.793,0h-1.1V8H69.261V7.038h5.655V8H72.571v7.31Zm13.1-1.1a4.276,4.276,0,0,1-7.31-3.034,4.276,4.276,0,1,1,8.551,0A4.055,4.055,0,0,1,85.812,14.21Zm-5.241-.69a3.255,3.255,0,0,0,2.207.965,2.744,2.744,0,0,0,2.207-.965,3.327,3.327,0,0,0,.965-2.345,2.841,2.841,0,0,0-.965-2.345,3.255,3.255,0,0,0-2.207-.965,2.744,2.744,0,0,0-2.207.965,3.327,3.327,0,0,0-.965,2.345A2.841,2.841,0,0,0,80.571,13.52Zm8,1.793V7.038h1.241l4,6.483V7.038h1.1v8.276h-1.1L89.536,8.555v6.758h-.965Z"
                    transform="translate(15.701 2.617)" fill="#fff" stroke="#fff" stroke-miterlimit="10"
                    stroke-width="0.2" />
                  <path id="Path_27" data-name="Path 27"
                    d="M78.34,23.583a5.8,5.8,0,0,0-5.931,5.931,5.887,5.887,0,0,0,5.931,5.931,5.8,5.8,0,0,0,5.931-5.931A5.722,5.722,0,0,0,78.34,23.583Zm0,9.379a3.424,3.424,0,0,1-3.31-3.586,3.424,3.424,0,0,1,3.31-3.586,3.341,3.341,0,0,1,3.31,3.586A3.424,3.424,0,0,1,78.34,32.961ZM65.513,23.583a5.8,5.8,0,0,0-5.931,5.931,5.887,5.887,0,0,0,5.931,5.931,5.8,5.8,0,0,0,5.931-5.931A5.722,5.722,0,0,0,65.513,23.583Zm0,9.379a3.424,3.424,0,0,1-3.31-3.586,3.424,3.424,0,0,1,3.31-3.586,3.341,3.341,0,0,1,3.31,3.586A3.424,3.424,0,0,1,65.513,32.961ZM50.2,25.376v2.483h5.931a5.215,5.215,0,0,1-1.379,3.172A6.1,6.1,0,0,1,50.2,32.824a6.422,6.422,0,0,1-6.483-6.62,6.506,6.506,0,0,1,6.483-6.62,6.839,6.839,0,0,1,4.552,1.793l1.793-1.793A8.838,8.838,0,0,0,50.341,17.1,9.3,9.3,0,0,0,41.1,26.2a9.3,9.3,0,0,0,9.241,9.1,7.938,7.938,0,0,0,6.345-2.621,8.3,8.3,0,0,0,2.207-5.793,5.172,5.172,0,0,0-.138-1.517H50.2Zm62.618,1.931a5.359,5.359,0,0,0-4.965-3.724c-3.034,0-5.517,2.345-5.517,5.931a5.772,5.772,0,0,0,5.793,5.931,5.658,5.658,0,0,0,4.827-2.621l-1.931-1.379a3.362,3.362,0,0,1-2.9,1.655,2.992,2.992,0,0,1-2.9-1.793L113.1,28l-.276-.69Zm-8,1.931a3.351,3.351,0,0,1,3.034-3.448,2.44,2.44,0,0,1,2.207,1.241l-5.241,2.207Zm-6.483,5.655h2.621V17.652H98.339ZM94.2,24.824a4.541,4.541,0,0,0-3.172-1.379,5.926,5.926,0,0,0-5.655,5.931,5.711,5.711,0,0,0,5.655,5.793,3.96,3.96,0,0,0,3.034-1.379H94.2v.828c0,2.207-1.241,3.448-3.172,3.448A3.064,3.064,0,0,1,88.133,36l-2.207.965a5.69,5.69,0,0,0,5.241,3.448c3.034,0,5.517-1.793,5.517-6.069V23.858H94.2v.965Zm-3.034,8.138a3.424,3.424,0,0,1-3.31-3.586,3.424,3.424,0,0,1,3.31-3.586,3.318,3.318,0,0,1,3.172,3.586A3.318,3.318,0,0,1,91.167,32.961Zm33.654-15.31h-6.207V34.892h2.621V28.41h3.586a5.386,5.386,0,1,0,0-10.758Zm.138,8.276h-3.724V20h3.724a3.03,3.03,0,0,1,3.034,2.9,3.156,3.156,0,0,1-3.034,3.034Zm15.861-2.483a4.636,4.636,0,0,0-4.552,2.621l2.345.965a2.436,2.436,0,0,1,2.345-1.241A2.592,2.592,0,0,1,143.717,28v.138a5.471,5.471,0,0,0-2.621-.69c-2.483,0-4.965,1.379-4.965,3.862a4.041,4.041,0,0,0,4.276,3.862,3.881,3.881,0,0,0,3.31-1.655h.138v1.379h2.483v-6.62a5.22,5.22,0,0,0-5.517-4.827Zm-.276,9.517c-.828,0-2.069-.414-2.069-1.517,0-1.379,1.517-1.793,2.759-1.793a5.334,5.334,0,0,1,2.345.552A3.212,3.212,0,0,1,140.545,32.961Zm14.482-9.1-2.9,7.448h-.138l-3.034-7.448H146.2l4.552,10.482-2.621,5.793h2.621l7.034-16.275ZM131.855,34.892h2.621V17.652h-2.621Z"
                    transform="translate(15.588 6.485)" fill="#fff" />
                  <g id="Group_5" data-name="Group 5" transform="translate(13.793 9.858)">
                    <path id="Path_28" data-name="Path 28"
                      d="M10.552,7.5A2.7,2.7,0,0,0,10,9.431V39.913a2.728,2.728,0,0,0,.69,1.931l.138.138,17.1-17.1V24.6Z"
                      transform="translate(-10 -7.013)" fill="url(#linear-gradient)" />
                    <path id="Path_29" data-name="Path 29"
                      d="M28.555,27.524,22.9,21.869v-.414L28.555,15.8l.138.138L35.451,19.8c1.931,1.1,1.931,2.9,0,4Z"
                      transform="translate(-5.108 -3.866)" fill="url(#linear-gradient-2)" />
                    <path id="Path_30" data-name="Path 30"
                      d="M33.434,25.793,27.641,20,10.4,37.241c.69.69,1.655.69,2.9.138L33.434,25.793"
                      transform="translate(-9.848 -2.273)" fill="url(#linear-gradient-3)" />
                    <path id="Path_31" data-name="Path 31"
                      d="M33.434,19.073,13.3,7.625a2.236,2.236,0,0,0-2.9.138l17.241,17.1Z"
                      transform="translate(-9.848 -7.138)" fill="url(#linear-gradient-4)" />
                    <path id="Path_32" data-name="Path 32"
                      d="M33.3,24.1l-20,11.31a2.256,2.256,0,0,1-2.759,0l-.138.138.138.138a2.256,2.256,0,0,0,2.759,0Z"
                      transform="translate(-9.848 -0.718)" opacity="0.2" />
                    <path id="Path_33" data-name="Path 33"
                      d="M10.552,36.965A2.7,2.7,0,0,1,10,35.034v.138a2.728,2.728,0,0,0,.69,1.931v-.138h-.138ZM40.344,21.793l-6.9,3.862.138.138,6.758-3.862A2.293,2.293,0,0,0,41.723,20C41.723,20.69,41.171,21.241,40.344,21.793Z"
                      transform="translate(-10 -2.273)" opacity="0.12" />
                    <path id="Path_34" data-name="Path 34"
                      d="M13.448,7.772l26.9,15.31c.828.552,1.379,1.1,1.379,1.793a2.293,2.293,0,0,0-1.379-1.931l-26.9-15.31C11.517,6.53,10,7.358,10,9.565V9.7C10,7.634,11.517,6.668,13.448,7.772Z"
                      transform="translate(-10 -7.147)" fill="#fff" opacity="0.25" />
                  </g>
                </svg> */}
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