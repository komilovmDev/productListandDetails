

export default function Card({item}) {
    return (
        <>
            <img src={item.image} alt="" />  
            <span>{item.name}</span>          
            <p>{item.description}</p>
            <h5>{item.price}</h5>
        </>
    )
}