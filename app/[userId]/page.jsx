"use client";
import React, { useEffect, useState } from "react";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import app from "../Shared/firebaseConfig";
import UserInfo from "../components/UserInfo";
import PinList from "../components/pins/PinList";

const Profile = ({ params }) => {
    const db = getFirestore(app);
    const [userInfo, setUserInfo] = useState();
    const [listOfPin, setListOfPin] = useState([]);

    useEffect(() => {
        if (params) {
            getUserInfo(params?.userId.replace("%40", "@"));
        }
    }, [params]);

    const getUserInfo = async (email) => {
        const docRef = doc(db, "user", email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserInfo(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
        }
    };

    useEffect(() => {
        if (userInfo) {
            getUserPins();
        }
    }, [userInfo]);

    const getUserPins = async () => {
        const q = query(
            collection(db, "pinterest-post"),
            where("email", "==", userInfo.email)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setListOfPin((prev) => [...prev, doc.data()]);
        });
    };

    return (
        <div>
            {userInfo && <UserInfo userInfo={userInfo} />}
            <PinList listOfPin={listOfPin} />
        </div>
    );
};

export default Profile;
