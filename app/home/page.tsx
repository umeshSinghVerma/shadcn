'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/home/table/1');
  })
  return null
  return (
    <>
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