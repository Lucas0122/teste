import Card from '../Card'
import './Time.css'


const Time = (props) => {
    return(
        props.colaboradores.length > 0 && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='card1'>
                {props.colaboradores.map( colaborador => <Card key={colaborador.name} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time