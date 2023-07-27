"use client";
import React, { useEffect, useState } from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import PinList from "./components/pins/PinList";
import app from "./Shared/firebaseConfig";

export default function Home() {
    const db = getFirestore(app);
    const [allPins, setAllPins] = useState([]);

    useEffect(() => {
        getAllPins();
    }, []);

    const getAllPins = async () => {
        const q = query(collection(db, "pinterest-post"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setAllPins((prev) => [...prev, doc.data()]);
        });
    };

    return (
        <div className="">
            <PinList listOfPin={allPins} />
        </div>
    );
}
