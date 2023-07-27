import React from "react";

const PinImageDetail = ({ pinDetail }: any) => {
    console.log(pinDetail);

    return (
        <img
            src={pinDetail?.image}
            alt=""
            className="w-full h-full object-cover rounded-tl-[36px] rounded-bl-[36px]"
        />
    );
};

export default PinImageDetail;
