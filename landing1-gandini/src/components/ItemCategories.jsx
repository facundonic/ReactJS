import { useState } from "react"
import Items from "./Items"

const categorias = {
    MOTHER: "Mothers",
    PROCESADOR: "Procesadores",
    VIDEO: "Placas de video"
};

function ItemCategories({ items }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredItems = selectedCategory ? items.filter(item => item.categoria === selectedCategory) : items;
    return (
        <>
            <h2 className='h2-categories'>CATEGORIAS</h2>
            <div className='div-buttons-padre'>
                <div className='div-buttons'>
                    <button className='button-productos' onClick={() => setSelectedCategory(categorias.MOTHER)}>Mothers</button>
                    <button className='button-productos' onClick={() => setSelectedCategory(categorias.PROCESADOR)}>Procesadores</button>
                    <button className='button-productos' onClick={() => setSelectedCategory(categorias.VIDEO)}>Placas de video</button>
                    <button className='button-productos' onClick={() => setSelectedCategory("")}>Todos</button>
                </div>
            </div>
            <div>
                {filteredItems.map(item => (
                    <Items
                        key={item.id}
                        id={item.id}
                        foto={item.foto}
                        nombre={item.nombre}
                        precio={item.precio}
                    />
                ))}
            </div>
        </>
    )
}

export default ItemCategories