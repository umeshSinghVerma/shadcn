'use client'
import Page2 from '@/components/Pages/page2'
import Page3 from '@/components/Pages/page3'
import Page4 from '@/components/Pages/page4'
import Page5 from '@/components/Pages/page5'
import Page6 from '@/components/Pages/page6'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page({ params }:any) {
    const router = useRouter();
    if (params.page == 'table') {
        router.push('/home/table/1');
    }
    else if (params.page == 1) {
        router.push('/home/table/1');
    }
    else if (params.page == 2) {
        return (
            <div className=' h-full overflow-x-auto' ><Page2/></div>
        )
    }
    else if (params.page == 3) {
        return (
            <div className=' h-full overflow-x-auto' ><Page3/></div>
        )
    }
    else if (params.page == 4) {
        return (
            <div className=' h-full overflow-x-auto' ><Page4/></div>
        )
    }
    else if (params.page == 5) {
        return (
            <div className=' h-full overflow-x-auto' ><Page5/></div>
        )
    }
    else if (params.page == 6) {
        return (
            <div className=' h-full overflow-x-auto' ><Page6/></div>
        )
    }
    return null
}
