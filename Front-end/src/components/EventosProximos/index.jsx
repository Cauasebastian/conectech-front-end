import { ContainerEventos, DivEventos, TituloEventos, ItemEvento, ImgEvento, TituloEvento, DataEvento, LocalEvento } from "./style"
import data from '../../../../events.json'

const EventosProximos = () => {
    return(
        <ContainerEventos>
            <TituloEventos>Eventos Próximos</TituloEventos>
            <DivEventos>
                {data.map((evento) => {
                    return(
                        <ItemEvento key={evento.id}>
                            <ImgEvento src={evento.image} alt="" />
                            <TituloEvento>{evento.title}</TituloEvento>
                            <DataEvento>{evento.data}</DataEvento>
                            <LocalEvento>{evento.local}</LocalEvento>
                        </ItemEvento>
                        
                    )
                })}
            </DivEventos>
           
        </ContainerEventos>
    )
}

export default EventosProximos