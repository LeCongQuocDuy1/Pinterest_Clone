"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserTag = () => {
    const { data: session } = useSession();
    const router = useRouter();

    return (
        <div className="my-[20px] flex items-center gap-[10px]">
            <Image
                onClick={() => router.push(`/${session?.user?.email}`)}
                src={session?.user?.image || ""}
                alt="Avatar"
                width={70}
                height={70}
                className="rounded-full bg-cover hover:bg-gray-200 cursor-pointer p-2"
            />
            <div className="flex flex-col">
                <p className="text-[14px] font-bold text-[#000]">Lê Duy Quốc</p>
                <p className="text-[14px] text-[#000]">1 người theo dõi</p>
            </div>
        </div>
    );
};

export default UserTag;
