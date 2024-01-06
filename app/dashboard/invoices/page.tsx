
"use client";
import React, { useState } from "react";
import Invoice from "@/app/dashboard/invoices/invoice";

export default function Page() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Trending')

    return (
        <>
            <Invoice properties={{setName, setCategory}} />
            <p>Invoices Page with name {name}</p>
            <p>selected category is {category}</p>
        </>
    ) 
    
}