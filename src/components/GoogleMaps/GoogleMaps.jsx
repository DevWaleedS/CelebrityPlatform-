import React from "react";

const GoogleMaps = ({ width, height, src }) => {
    return (
        <iframe
            src={src}
            width={width}
            height={height}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
        />
    );
};

export default GoogleMaps;
