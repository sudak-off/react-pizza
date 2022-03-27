import { useState } from "react"

function Categories({ items, onClick }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li 
                className={activeItem === null ? 'active' : ''} 
                onClick={() => setActiveItem(null)}
                >Все</li>
                {
                    items.map((name, index) => {
                        return <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    })
                }
            </ul>
        </div>
    );
}

export default Categories;
