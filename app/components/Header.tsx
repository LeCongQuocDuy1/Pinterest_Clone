"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { HiSearch, HiChat, HiBell, HiOutlineChevronDown } from "react-icons/hi";
import app from "../Shared/firebaseConfig";
import { useRouter } from "next/navigation";

import { doc, getFirestore, setDoc } from "firebase/firestore";

const Header = () => {
    const { data: session } = useSession();
    const db = getFirestore(app);
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);

    const saveUserInfo = async () => {
        if (session?.user) {
            await setDoc(doc(db, "user", session?.user?.email || ""), {
                userName: session?.user?.name,
                email: session?.user?.email,
                userImage: session?.user?.image,
            });
        }
    };

    const handleLogout = () => {
        signOut();
        router.push("/");
    };

    useEffect(() => {
        saveUserInfo();
    }, [session]);

    return (
        <div className="flex items-center gap-3 py-2 px-6 justify-between bg-[#fff] fixed top-0 right-0 left-0 z-20">
            <Image
                onClick={() => router.push(`/`)}
                src="/logo.png"
                width={50}
                height={50}
                alt="Logo"
                className="hover:bg-gray-200 p-3 rounded-full cursor-pointer"
            />
            <button
                onClick={() => router.push(`/`)}
                className="btn bg-[#000] text-[#fff] w-[100px] px-[0px]"
                style={{ paddingRight: "0px", paddingLeft: "0px" }}
            >
                Trang chủ
            </button>
            <button
                className="flex items-center text-[15px] font-[600] relative"
                onClick={() => setIsActive(!isActive)}
            >
                Tạo{" "}
                <HiOutlineChevronDown className="text-[18px] ml-[5px] mb-[5px]" />
                {isActive && (
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
                )}
            </button>
            <div className="bg-[#e9e9e9] flex items-center rounded-[26px] px-[15px] w-[70%]">
                <HiSearch className="text-[18px] font-[900] text-[#000] mr-[10px]" />
                <input
                    type="text"
                    placeholder="Tìm kiếm những ý tưởng..."
                    className="bg-transparent text-[14px] py-[12px] border-none outline-none"
                />
            </div>

            <div className="flex items-center gap-2">
                {session?.user ? (
                    <>
                        <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                            <HiBell className="text-[#5f5f5f] text-[24px]" />
                        </div>
                        <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
                            <HiChat className="text-[#5f5f5f] text-[24px]" />
                        </div>
                        <Image
                            onClick={() =>
                                router.push(`/${session?.user?.email}`)
                            }
                            src={session?.user?.image || "/man.png"}
                            width={50}
                            height={50}
                            alt="Logo"
                            className="hover:bg-gray-200 p-2 rounded-full cursor-pointer"
                        />
                        <div
                            className="hover:bg-gray-200 p-2 rounded-full cursor-pointer relative "
                            onClick={() => setIsActive(!isActive)}
                        >
                            <HiOutlineChevronDown className="text-[#5f5f5f] text-[18px]" />
                            {isActive && (
                                <div className="absolute top-[40px] left-[-80px] w-[120px] bg-[#fff] shadow-lg rounded-[10px] px-[8px] pt-[12px] pb-[6px]">
                                    <ul>
                                        <li
                                            onClick={handleLogout}
                                            className="text-[15px] font-[600] text-[#000] rounded-[8px] p-[8px] hover:bg-red-400 hover:text-[#fff] text-left"
                                        >
                                            Đăng xuất
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button
                            className="btn bg-secondary text-[#000] w-[100px]"
                            style={{ paddingRight: "0px", paddingLeft: "0px" }}
                            onClick={() => signIn()}
                        >
                            Log in
                        </button>
                        <button
                            className="btn bg-primary text-[#fff] w-[100px]"
                            style={{ paddingRight: "0px", paddingLeft: "0px" }}
                        >
                            Sign up
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
