import React, { useState } from "react";
import { MdDownloadForOffline } from "react-icons/md";

const UploadImage = ({ setFile }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="bg-[#efefef] w-full h-full rounded-[10px] p-[14px]">
            <label className="flex flex-col text-center p-[10px] w-full h-full border-dashed border-[2px] rounded-[10px] border-[#dadada] cursor-pointer">
                {!selectedFile && (
                    <div className="m-auto">
                        <MdDownloadForOffline className=" m-auto text-[#5f5f5f] text-[30px] mb-[20px]" />
                        <p className="">
                            Kéo và thả hoặc nhấp vào để tải ảnh lên
                        </p>
                    </div>
                )}
                {selectedFile && (
                    <img
                        src={window.URL.createObjectURL(selectedFile)}
                        alt="selectedImage"
                        width={500}
                        height={500}
                        className="object-contain h-[90%]"
                    />
                )}
                {!selectedFile && (
                    <p className="text-[12px] text-[#333] w-full text-center">
                        Bạn nên sử dụng tập tin .jpg chất lượng cao có kích
                        thước dưới 20MB
                    </p>
                )}
                <input
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                        setSelectedFile(e.target.files[0]);
                    }}
                    type="file"
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default UploadImage;
