import Image from 'next/image'

export default function Home() {
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //     Welcome to ETHLabs
  //   </main>
  // )

  return (
    <div className="relative h-[1000px] w-full overflow-hidden">
            {/* Hero Image */}
            <Image 
                src="/city.png"
                alt="Hero Image" 
                layout="fill" 
                objectFit="cover" // Adjust how the image fits within the container
                priority // Loads image first for better UX
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80" />
    </div>
  )
}
