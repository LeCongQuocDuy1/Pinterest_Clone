"use client";
import React, { useState } from "react";
import UserTag from "./UserTag";

const UserData = ({ setTitle, setDescription, setLink, setFile }: any) => {
    return (
        <div className="my-[20px] w-full">
            <input
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tạo tiêu đề"
                name="title"
                className="py-[10px] w-full placeholder:text-[#767676] placeholder:text-[34px] placeholder:font-bold outline-none border-b-[1px] font-bold text-[#000] text-[34px] border-[#767676] focus:border-b-[2px] focus:border-b-[#0074e8]"
            />
            <label
                htmlFor="title"
                className="text-[12px] text-[666] mt-[6px] flex justify-between items-center"
            >
                <p>
                    40 kí tự đầu tiên của bạn là nội dung thường xuất hiện trong
                    bảng tin
                </p>
                <p>100</p>
            </label>
            <UserTag />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Cho mọi người biết Ghim của bạn giới thiệu điều gì"
                name="description"
                className="py-[10px] w-full placeholder:text-[#767676] placeholder:text-[16px] outline-none border-b-[1px] text-[#000] text-[16px] border-[#767676] focus:border-b-[2px] focus:border-b-[#0074e8]"
            ></textarea>
            <label
                htmlFor="description"
                className="text-[12px] text-[666] mt-[6px] flex justify-between items-center"
            >
                <p>
                    Mọi người thường sẽ thấy 50 kí tự đầu tiên khi họ nhấp vào
                    Ghim của bạn
                </p>
                <p>500</p>
            </label>
            <input
                onChange={(e) => setLink(e.target.value)}
                type="text"
                placeholder="Thêm một liên kết đích"
                name="link"
                className="py-[10px] mt-[150px] w-full placeholder:text-[#767676] placeholder:text-[16px] outline-none border-b-[1px] text-[#000] text-[16px] border-[#767676] focus:border-b-[2px] focus:border-b-[#0074e8]"
            />
        </div>
    );
};

export default UserData;
