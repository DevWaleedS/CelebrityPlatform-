import React from "react";
import "./TitleBox.css";
const TitleBox = ({ title, description }) => {
    return (
        <>
            <div className="title-box pt-[61px]">
                <div className="container flex justify-center items-center text-center flex-col md:gap-[19px]">
                    <h1 className="">{title}</h1>
                    <h5 className="text-start">{description}</h5>
                </div>
            </div>
        </>
    );
};

export default TitleBox;
