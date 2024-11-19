import { db } from "@/app/_lib/prisma"
import Image from "next/image"
import ServiceItem from "./_components/service-item"

interface BarbershopDetailsPageProps {
    params: {
        id?: string
    }
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps ) => {

    if (!params.id){
        // TODO: redirecionar para home page
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: { 
            id: params.id 
        },
        include: {
            services: true
        },
    })

    if (!barbershop) {
        // TODO: redirecionar para home page
        return null
    }

    return (
        <div className="h-[250px] w-full relative">
            
         
            {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service} />
            ))} 
            
        </div>
        
    )
}
export default BarbershopDetailsPage