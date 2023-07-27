"use client";
import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import UploadImage from "./UploadImage";
import { useSession } from "next-auth/react";
import UserData from "./UserData";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../Shared/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Form = () => {
    const storage = getStorage(app);
    const router = useRouter();
    const db = getFirestore(app);
    const postId = Date.now().toString();
    const { data: session } = useSession();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");
    const [file, setFile] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOnSave = () => {
        setLoading(true);
        console.log(title, description, link, file);
        handleUploadFile();
    };

    const handleUploadFile = () => {
        const storageRef = ref(storage, `pinterest/${file.name}`);
        uploadBytes(storageRef, file)
            .then((snapshot) => {
                console.log("Uploaded a blob or file!");
            })
            .then((response) => {
                getDownloadURL(storageRef).then(async (url) => {
                    console.log("File available at", url);
                    const postData = {
                        title,
                        description,
                        link,
                        image: url,
                        userName: session.user.name,
                        email: session.user.email,
                        userImage: session.user.image,
                        id: postId,
                    };
                    await setDoc(
                        doc(db, "pinterest-post", postId),
                        postData
                    ).then((response) => {
                        setLoading(true);
                        router.push(`/${session.user.email}`);
                        console.log("Saved");
                    });
                });
            });
    };

    return (
        <div className="bg-[#fff] rounded-[16px] my-[40px] mx-auto px-[60px] py-[40px] w-[900px] h-[700px]">
            <div className="flex items-center justify-between mb-[20px]">
                <div className="">
                    <HiDotsHorizontal className="text-[20px] font-[600] cursor-pointer" />
                </div>
                <button
                    onClick={handleOnSave}
                    className="btn bg-primary text-[#fff]"
                >
                    {loading ? (
                        <Image
                            src="/loading-indicator.png"
                            width={30}
                            height={30}
                            className="animate-spin"
                        />
                    ) : (
                        <span>Lưu</span>
                    )}
                </button>
            </div>
            <div className="grid grid-cols-3 gap-[30px] h-[500px]">
                <div className="h-full">
                    <UploadImage setFile={setFile} />
                </div>
                <div className="col-span-2 h-full">
                    <UserData
                        setTitle={setTitle}
                        setDescription={setDescription}
                        setLink={setLink}
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
