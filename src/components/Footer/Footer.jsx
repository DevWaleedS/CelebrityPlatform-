import React, { useEffect, useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import "./Footer.css";

import { KeyboardDoubleArrowUp } from "@mui/icons-material";
import { ReactComponent as Svg_sn } from "../../assets/Icon/Group 45.svg";
import { ReactComponent as Svg_tk } from "../../assets/Icon/Group 46.svg";
import { ReactComponent as Svg_tw } from "../../assets/Icon/Group 47.svg";
import { ReactComponent as Svg_na } from "../../assets/Icon/Group 48 (1).svg";
import { ReactComponent as Svg_Group } from "../../assets/Icon/Group 9.svg";
import { ReactComponent as Svg_page } from "../../assets/Icon/Page-1 (1).svg";
import { ReactComponent as Svg_Path1 } from "../../assets/Icon/Path 36.svg";
const Footer = () => {
    const [showup, setShowup] = useState(false);
    let scrolly = useScrollYPosition();

    useEffect(() => {
        if (scrolly >= 500) {
            setShowup(true);
        } else {
            setShowup(false);
        }
    }, [scrolly]);
    let goUpWindow = () => {
        window.scroll(0, 0);
    };
    return (
        <>
            <footer className="min-h-[182px] bg-color-main-04 ">
                <div className="container flex  min-h-[182px] py-[60px] justify-center items-center lg:flex-row flex-col-reverse lg:gap-0 gap-[30px] ">
                    <div className=" flex justify-center items-center gap-[15px]">
                        <a
                            href="https://twitter.com/celebrityads1"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                            target="blank"
                        >
                            <Svg_tw />
                        </a>
                        <a
                            href="https://www.tiktok.com/@celebrityads1"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                            target="blank"
                        >
                            <Svg_tk />
                        </a>
                        <a
                            href="https://snapchat.com/add/celebrityads1"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                            target="blank"
                        >
                            <Svg_sn />
                        </a>
                        <a
                            href="https://www.instagram.com/celebrityads1/"
                            className="w-[36px]  h-[36px] flex justify-center items-center "
                            target="blank"
                        >
                            <Svg_na />
                        </a>
                    </div>
                    <div className="flex  justify-center items-center sm:flex-row flex-col gap-[40px]  md:gap-[100px] lg:gap-[100px] xl:gap-[120px] flex-1">
                        <a
                            href="tel:0506340450"
                            target="blank"
                            className="text-color-main-03"
                        >
                            0506340450
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
                            href="https://blog.celebrityads.net"
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
                <div
                    className={showup === true ? "go-up show " : "go-up"}
                    onClick={() => {
                        window.scroll(0, 0);
                    }}
                >
                    <span>
                        <KeyboardDoubleArrowUp />
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
