import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const src = ["/assets/linkedin.png", "/assets/github.png", "/assets/coding.png", "/assets/instagram.png", "/assets/twitter.png"];
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/4">

        <span className="text-2.5xl xs:text-5xl sm:text-6xl font-mainFont font-semibold my-2 block mt-5">Utkarsh Sarkari.</span>

        <p className="text-1.5xl xs:text-2xl sm:text-3xl text-gray-400 font-semibold my-2 xs:my-3">Converting Thoughts into Code <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline-block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
        </p>

        <p className="font-mainFont text-sm xs:text-xl italic text-gray-500 my-6">As a <span className="text-emerald-200">Software Engineer</span> with a strong development background, I deliver high-quality web solutions that drive impactful outcomes.
          <span className="text-emerald-200">Proficient in the MERN Stack</span>, I expertly develop robust and user-centric applications as a skilled <span className="text-emerald-200">Full-Stack Developer</span>.</p>

        <div className="flex flex-wrap items-center">

          <Link href="#" className="text-sm sm:text-[15px]  rounded-md px-[2px] py-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold  hover:scale-[1.02] my-4">

            <div className="bg-black rounded-md px-5 py-2 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 flex items-center justify-between">
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
            </div>
          </Link>

          <Link href="#" className="text-sm sm:text-[15px]  rounded-md px-[2px] py-[2px] bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold  hover:scale-[1.02]">

            <div className="bg-black rounded-md px-5 py-2 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500 flex items-center justify-between">
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="flex items-center pt-12 justify-between">
          {
            src.map((src) => (
              <div className="p-1 cursor-pointer rounded-full">
                <Image key={src} alt="image" height={23} width={23} src={src} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
