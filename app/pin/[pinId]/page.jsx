"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../Shared/firebaseConfig";
import PinImageDetail from "@/app/components/pins/PinImageDetail";
import { HiDotsHorizontal } from "react-icons/hi";
import UserTag from "@/app/components/UserTag";

const PinDetailId = ({ params }) => {
    const db = getFirestore(app);
    const [pinDetail, setPinDetail] = useState();

    useEffect(() => {
        if (params) {
            getPinDetailById(params?.pinId);
        }
    }, [params]);

    const getPinDetailById = async (pinid) => {
        const docRef = doc(db, "pinterest-post", pinid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setPinDetail(docSnap.data());
        } else {
            console.log("No such document!");
        }
    };

    return (
        <div className="flex">
            <div className="m-auto w-[1000px] h-full grid grid-cols-2">
                <div className="rounded-tl-[36px] rounded-bl-[36px] shadow-lg">
                    <PinImageDetail pinDetail={pinDetail} />
                </div>
                <div className="rounded-tr-[36px] rounded-br-[36px] shadow-lg py-[40px] px-[30px]">
                    <div className="flex items-center justify-between mb-[20px]">
                        <div className="">
                            <HiDotsHorizontal className="text-[20px] font-[600] cursor-pointer" />
                        </div>
                        <button className="btn bg-primary text-[#fff]">
                            <span>Lưu</span>
                        </button>
                    </div>
                    <a
                        href={pinDetail?.link}
                        className="underline text-[15px] text-[#000]"
                    >
                        {pinDetail?.link}
                    </a>
                    <p className="text-[30px] font-[600] my-[20px]">
                        {pinDetail?.title}
                    </p>
                    <p className="text-[16px] mb-[10px]">
                        {pinDetail?.description}
                    </p>
                    <div className="flex items-center justify-between w-full">
                        <UserTag />
                        <button className="btn bg-secondary text-[#000]">
                            <span>Theo dõi</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinDetailId;
