import React from "react";
import { useRouter } from "next/navigation";

const DropdownMenu = ({ isActive }: any) => {
    const router = useRouter();

    return (
        <div className="absolute top-[40px] left-[-65px] w-[180px] h-[100px] bg-[#fff] shadow-lg rounded-[10px] px-[8px] py-[12px]">
            <ul>
                <li
                    className={`text-[15px] font-[600] text-[#000] rounded-[8px] p-[8px] ${
                        isActive && "bg-secondary"
                    } text-left`}
                >
                    Tạo Ghim ý tưởng
                </li>
                <li
                    onClick={() => router.push(`/pin-builder`)}
                    className="text-[15px] font-[600] text-[#000] rounded-[8px] p-[8px] hover:bg-secondary text-left"
                >
                    Tạo Ghim
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
