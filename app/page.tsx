import image from "@/assets/images/parliament-animals.png"

import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <main>
      <div className="flex flex-col gap-3 py-12 items-center">
        <h1 className="text-5xl font-bold text-center mb-3 ">
          Dierenwelzijn moties in de Tweede Kamer
        </h1>
        <p className="text-center text-xl max-w-2xl">
          Bekijk hoe de politieke partijen in Nederland stemmen op moties over
          dierenwelzijn en bepaal waar je eigen stem heen moet.
        </p>
        <Image
          src={image}
          height={450}
          alt="Parliament room with animals in the center"
        ></Image>
      </div>

      <div className="bg-gray-100 p-9">
        <div className="flex flex-col gap-6 max-w-3xl m-auto">
          <h2 className="text-4xl font-bold">Moties</h2>
          <p className="text-lg">
            Bekijk recente moties over dierenwelzijn om te zien welke moties
            worden aangenomen en bekijk het stemgedrag van elke politieke
            partij.
          </p>
          <Link
            href="/motions/"
            className="w-fit bg-primary px-3 py-2 rounded text-primary-foreground"
          >
            Ga naar Moties
          </Link>
        </div>
      </div>

      <div className="p-9">
        <div className="flex flex-col gap-6 max-w-3xl m-auto items-end">
          <h2 className="text-4xl font-bold">Partijen</h2>
          <p className="text-lg text-right">
            Bekijk verschillende statistieken over elke partij, zoals hoe vaak
            ze voor of tegen dierenwelzijn moties stemmen en hoe consistent ze
            zijn.
          </p>
          <Link
            href="/parties/"
            className="w-fit bg-primary px-3 py-2 rounded text-primary-foreground"
          >
            Ga naar Partijen
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 p-9">
        <div className="flex flex-col gap-6 max-w-3xl m-auto">
          <h2 className="text-4xl font-bold">Meer info</h2>
          <p className="text-lg">
            Leer meer over waarom we deze website hebben gemaakt en waar de data
            vandaan komt.
          </p>
          <Link
            href="/motions/"
            className="w-fit bg-primary px-3 py-2 rounded text-primary-foreground"
          >
            Ga naar Meer info
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home
