'use client'
import SideNav from '@/components/SideNav/SideNav'
import SidenavUsable from '@/components/SideNav/SidenavUsable'
import { SidenavContent } from '@/components/SideNav/SidenavContent'
import { Connections } from '@/components/home/Connections'
import DataStats from '@/components/home/DataStats'
import ImageComp from '@/components/home/ImageComp'
import MyForm from '@/components/home/MyForm'
import Post from '@/components/home/Post'
import Sidebar from '@/components/home/SideBar'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MyForm2 from '@/components/home/MyForm2'
import Table1 from '@/components/home/Table1'
import Table2 from '@/components/home/Table2'
import Table3 from '@/components/home/Table3'
import Header from '@/components/Elements/Header'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home/table/1');
  })
  return null
  return (
    <>
      {/* <Sidebar /> */}
      {/* <DataStats /> */}
      {/* <Connections /> */}
      {/* <div className='flex flex-col'>
        <Link href='/home/InsideEventDetail/1'>InsiderEventDetail1</Link>
        <Link href='/home/Steps/1'>Steps</Link>
        <Link href='/home/e1'>e1</Link>
        <Link href='/home/e2'>e2</Link>
        <Link href='/home/e11'>e11</Link>
        <Link href='/home/postModle'>PostModle</Link>
        <Link href='/contact'>Contact</Link>
      </div> */}
      {/* <Post /> */}
      {/* <ImageComp /> */}
      {/* <MyForm /> */}
      {/* <div id='sidenav' className='absolute left-0 z-[10000]'>
        <Connections />
      </div> */}
      {/* <MyForm/> */}

      {/* <SidenavUsable/> */}
      {/* <MyForm2 /> */}
      {/* <Table1 /> */}
      {/* <Table2 /> */}
      {/* <Table3 /> */}
      {/* <Header /> */}

    </>

  )
}

export default Page