import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

const Home = ()  => {
  return (
    <div>
      {/* Header */}
      <Header  />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá Silvio!</h2>
        <p>Segunda-Feira, 13 de Naovembro</p>

        <div className="flex items-center gap-2 mt-6">
          <Input  placeholder="Faça sua busca..."/>
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>


      </div>
    </div>
  )
}

export default Home