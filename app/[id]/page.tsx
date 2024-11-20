import { SearchIcon } from "lucide-react"
import Header from "../_components/header"
import { Button } from "../_components/ui/button"
import { Input } from "../_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "../_components/ui/card"
import { Badge } from "../_components/ui/badge"
import { Avatar, AvatarImage } from "../_components/ui/avatar"
import { db } from "../_lib/prisma"
import ServiceItem from "../_components/service-item"



interface BarbershopDetailsPageProps {
  params: {
      id?: string
  }
}

const Home = async ({params}: BarbershopDetailsPageProps)  => {

  if (!params.id){
    // TODO: redirecionar para home page
    return null
  }

  //chamar meu banco de dados
  const barbershops = await db.barbershop.findUnique({
    where: { 
      id: params.id, 
    },
    include: {
      services: true,
    },
  })

  if (!barbershops) {
    // TODO: redirecionar para home page
    return null
  }
  
  return (
    <div>
      {/* Header */}
      <Header  />
      <div className="p-5">

        {/* TEXTO */}
        <h2 className="text-xl font-bold">Olá Silvio!</h2>
        <p>Segunda-Feira, 13 de Naovembro</p>


        {/* BUSCA */}
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
            src="/banner02.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamentos */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamento
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barberaria Junior du Corte</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Novembro</p>
              <p className="text-2xl">13</p>
              <p className=" text-sm">14:37</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="p-5 text-xs font-bold uppercase text-gray-400">
        Serviços
      </h2>

      <div className="px-5 flex flex-col gap-4  py-1">
        {barbershops.services.map(service => (
            <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

export default Home