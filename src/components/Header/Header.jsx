import React, { useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Svg_logo } from "../../assets/Icon/Logo.svg";
import "./Header.css";
import { HighlightOff, Menu } from "@mui/icons-material";

const Header = () => {
    let menuLink = useRef(null);
    const handleShowMenu = useCallback(() => {
        if (!menuLink.current.classList.contains("active")) {
            menuLink.current.classList.add("active");
        }
    }, []);
    const handleRemoveMenu = useCallback(() => {
        if (menuLink.current.classList.contains("active")) {
            menuLink.current.classList.remove("active");
        }
    }, []);
    return (
        <div className=" header-box  min-h-[120px] bg-color-main-06 justify-center flex items-center relative">
            <div className="container">
                <div className="header w-full  flex items-center justify-between gap-[20px] flex-row ">
                    <div className="logo w-[200px] md:w-[278px] md:max-h-[56px]">
                        <Svg_logo />
                    </div>
                    <div
                        className="!text-main_color_02 cursor-pointer  flex justify-center items-center  min-[910px]:hidden"
                        onClick={handleShowMenu}
                    >
                        <Menu className="!text-[32px] !font-[700]" />
                    </div>
                    <div className="link flex justify-center items-center max-[910px]:hidden ">
                        <ul className="flex justify-center items-center gap-[24px] flex-wrap ">
                            <NavLink
                                to={"/"}
                                className="text-[17px] font-[600] w-[67px]  "
                            >
                                الرئيسية
                            </NavLink>

                            <NavLink
                                to={"/home/about"}
                                className="text-[17px] font-[600] w-[60px]  "
                            >
                                من نحن
                            </NavLink>

                            <NavLink
                                to={"/home/privacy"}
                                className="text-[17px] font-[600]  w-[145px]  "
                            >
                                سياسة الخصوصية
                            </NavLink>

                            <NavLink
                                to={"/home/term"}
                                className="text-[17px] font-[600] w-[133px]  "
                            >
                                الشروط والأحكام
                            </NavLink>

                            <NavLink
                                to={"/home/contact"}
                                className="text-[17px] font-[600]  w-[64px]  "
                            >
                                اتصل بنا
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="menu-link    z-[5000] min-[910px]:!hidden"
                ref={menuLink}
            >
                <div
                    className=" absolute top-[40px] left-[20px] z-[5005] cursor-pointer"
                    onClick={handleRemoveMenu}
                >
                    <HighlightOff className="!text-[32px] !font-[700] !text-main_color_02" />
                </div>
                <ul className=" h-full gap-[20px]  bg-white w-full max-w-[100%] relative z-[1002] p-[20px] flex justify-center items-center flex-col">
                    <NavLink
                        to={"/"}
                        className=" px[12px] text-color-main-04 tn hover:border-b-[1px] border-color-main-04  w-fit font-[600] cursor-pointer text-[20px]"
                        onClick={handleRemoveMenu}
                    >
                        الرئيسية
                    </NavLink>

                    <NavLink
                        to={"/home/about"}
                        className=" px[12px] text-color-main-04 tn hover:border-b-[1px] border-color-main-04  w-fit font-[600] cursor-pointer text-[20px]"
                        onClick={handleRemoveMenu}
                    >
                        من نحن
                    </NavLink>

                    <NavLink
                        to={"/home/privacy"}
                        className=" px[12px] text-color-main-04 tn hover:border-b-[1px] border-color-main-04  w-fit font-[600] cursor-pointer text-[20px]"
                        onClick={handleRemoveMenu}
                    >
                        سياسة الخصوصية
                    </NavLink>

                    <NavLink
                        to={"/home/term"}
                        className=" px[12px] text-color-main-04 tn hover:border-b-[1px] border-color-main-04  w-fit font-[600] cursor-pointer text-[20px]"
                        onClick={handleRemoveMenu}
                    >
                        الشروط والأحكام
                    </NavLink>

                    <NavLink
                        to={"/home/contact"}
                        className=" px[12px] text-color-main-04 tn hover:border-b-[1px] border-color-main-04  w-fit font-[600] cursor-pointer text-[20px]"
                        onClick={handleRemoveMenu}
                    >
                        اتصل بنا
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;
