import React from 'react';
import './Footer.css'
import { ReactComponent as Svg_Group } from "../../assets/Icon/Group 9.svg";
import { ReactComponent as Svg_page } from "../../assets/Icon/Page-1 (1).svg";
import { ReactComponent as Svg_Path1 } from "../../assets/Icon/Path 36.svg";
import { ReactComponent as Svg_na } from "../../assets/Icon/Group 48 (1).svg";
import { ReactComponent as Svg_tk } from "../../assets/Icon/Group 46.svg";
import { ReactComponent as Svg_sn } from "../../assets/Icon/Group 47.svg";
import { ReactComponent as Svg_tw } from "../../assets/Icon/Group 45.svg";
const Footer = () => {
    return (
        <>
            <footer className="min-h-[182px] bg-color-main-04 ">
                <div className="container flex  min-h-[182px] py-[60px] justify-center items-center lg:flex-row flex-col-reverse lg:gap-0 gap-[30px] ">
                    <div className=" flex justify-center items-center gap-[15px]">
                        <a
                            href="#"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                        >
                            <Svg_tw />
                        </a>
                        <a
                            href="#"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                        >
                            <Svg_tk />
                        </a>
                        <a
                            href="#"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                        >
                            <Svg_sn />
                        </a>
                        <a
                            href="#"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                        >
                            <Svg_na />
                        </a>
                    </div>
                    <div className="flex  justify-center items-center sm:flex-row flex-col gap-[40px]  md:gap-[100px] lg:gap-[100px] xl:gap-[120px] flex-1">
                        <a
                            href="tel:+966506340450"
                            target="blank"
                            className="text-color-main-03"
                        >
                            966506340450
                            <span>
                                <Svg_Group />
                            </span>
                        </a>
                        <a
                            href="mailto:info@celebrity.sa"
                            target="blank"
                            className="text-color-main-03"
                        >
                            info@celebrity.sa
                            <span>
                                <Svg_Path1 />
                            </span>
                        </a>
                        <a
                            href="https://www.bing.com/search?q=celebrity.sa&form=ANNH01&refig=15bdf807f0814dc78654c6bc0883776a"
                            target="blank"
                            className="text-color-main-03"
                        >
                            celebrity.sa
                            <span>
                                <Svg_page />
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
