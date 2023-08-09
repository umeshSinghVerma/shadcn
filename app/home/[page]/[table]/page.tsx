'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Page1 from '@/components/Pages/page1';

export default function Page() {
    const params = useParams(); 
    const [currentComp, setCurrentComp] = useState(params.table);
    useEffect(() => {
        setCurrentComp(params.table);
    }, [params.table])
    return (
        <div>
            <Page1 currentComp={currentComp} />
        </div>
    )
}
