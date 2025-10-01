import { useEffect, useState } from "react"
import ItemCategories from "./ItemCategories";
import componentesComputadora from "../productos/productos";


function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchSimulator = new Promise((resolve) => {
      setTimeout(() => {
        resolve(componentesComputadora)
      },500)
    })
    fetchSimulator.then((data) => {
      setProductos(data)
    })
  },[])

  
  return (
    <div>
      <ItemCategories items={productos}/>
    </div>
  )
}

export default ItemListContainer