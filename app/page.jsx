"use client"
import Image from "next/image";
import Servercomponents from "@/components/Servercomponents";
import Scripttag from "@/components/Scripttag";
import Imgtag from "@/components/Imgtag";
import Api from "@/components/Api";
import Serveraction from "@/components/Serveraction";
import Authentication from "@/components/Authentication";
import Children from "@/components/Children";
import Userouter from "@/components/Userouter";






export default function Home() {

  return (
    <>
      {/* TAGS */}
      {/* <Imgtag/> */}
      {/* <Scripttag/> */}
      {/* <Servercomponents/> */}
      <Api/>
      {/* <Serveraction/> */}
      {/* <Authentication/> */}
      {/* <Children>
        <span className='bg-white text-black'>LEARNING ABOUT CHILDREN</span>
      </Children>  */}
      {/* <Userouter/> */}

    </>
  );
}


