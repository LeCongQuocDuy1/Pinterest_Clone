import React from "react";
import { useRouter } from "next/navigation";

const PinItem = ({ pin }: any) => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push(`/pin/${pin.id}`)}
            className="relative rounded-[18px] before:rounded-[18px] before:content-[''] before:block before:absolute before:w-full before:h-full before:bg-transparent hover:before:bg-overlay cursor-zoom-in"
        >
            <img
                src={pin.image}
                alt=""
                className="w-full h-full rounded-[18px] object-contain"
            />
        </div>
    );
};

export default PinItem;
