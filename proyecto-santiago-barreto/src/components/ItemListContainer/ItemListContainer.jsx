import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <>
            <h2 className="itemList-h2">{props.greeting}</h2>
        </>
    )
}

// style={{color: 'cyan', backgroundColor:"grey", display:"flex", justifyContent:"center"}}

export default ItemListContainer

