import React from 'react';

const Formulario = () => {


    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!fruta.trim()){
            console.log('esta vacio fruta')
            return
        }
        
        if(!descripcion.trim()){
            console.log('esta vacio descripcion')
            return
        }
        
        console.log('procesando datos...' + fruta + descripcion)
        //agrega al array la fruta
        setLista([
            ...lista,
            {nombraFruta: fruta, nombreDescripcion: descripcion}
        ])
        //limpia formulario
        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombraFruta} - {item.nombreDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
