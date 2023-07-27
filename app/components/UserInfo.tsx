import React from "react";
import Image from "next/image";

const UserInfo = ({ userInfo }: any) => {
    return (
        <div className="flex bg-[#fff] px-[20px]">
            <div className="m-auto text-center">
                <Image
                    src={userInfo?.userImage}
                    alt="Avatar"
                    width={130}
                    height={130}
                    className="rounded-full mb-[7px] bg-contain m-auto"
                />
                <p className="text-[35px] font-[600] text-[#000] text-center">
                    {userInfo?.userName}
                </p>
                <p className="text-[14px] text-[#666] my-[6px]">@lduyquc</p>
                <p className="text-[16px] text-[#000] mb-[10px]">
                    <span className="font-[700]">1 người theo dõi</span> · 0
                    người đang theo dõi
                </p>
                <div className="flex items-center justify-center gap-3">
                    <div className="btn bg-secondary text-[#000] hover:cursor-pointer hover:bg-[#d7d6d6] ">
                        Chia sẻ
                    </div>
                    <div className="btn bg-secondary text-[#000] hover:cursor-pointer hover:bg-[#d7d6d6]">
                        Chỉnh sửa hồ sơ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
