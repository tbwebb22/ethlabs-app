import Image from 'next/image'

export default function Home() {

  return (
    <div className="absolute top-0 h-[1000px] w-full overflow-hidden z-0">
        <Image 
            src="/ETHLabsCity.png"
            alt="Hero Image" 
            layout="fill" 
            objectFit="cover"
            priority
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60" />
    </div>
  )
}
