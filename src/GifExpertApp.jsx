import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const [inputCategory, setInputCategory] = useState('');

    const agregarCategoria = (newCategoria) => {
        if (categories.includes(newCategoria)) return;
        setCategories([newCategoria, ...categories]);

    }
    const handleOnChange = (e) => {
        setInputCategory(e.target.value)
    }
    return (
        <>

            <h2>GifExpertApp</h2>

            <AddCategory onNuevaCategoria={agregarCategoria} />


            {categories.map(category =>
            (
                <GifGrid
                    key={category}
                    category={category}
                />
            )
            )}

        </>
    )
}
