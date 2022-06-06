export default function CardsMenu(props){
const {id, imgProducts, name, price, order, updateOrder}=props
const add=(event)=>{
    if(!order.hasOwnProperty("products")){
        console.log("esta orden no tiene nada")
        updateOrder(
        {
        products:[
            {id: id, qty:1, name:name, price:price}
        ]
        }
    )
    
    }else{
        let encontreProducto= false;
       for( let i=0; i<order.products.length; i++ ){
           if(order.products[i].id === id){
               order.products[i].qty+= 1
               encontreProducto= true;
           }
       }
       if(encontreProducto === false){
           order.products.push({id:id, qty:1,name:name, price:price})
       }
       updateOrder(order)
    }
    
    console.log(order)

}
return (
    <section className="boxCards">
        <img 
        className="conteiner-img"
        src={imgProducts}
        alt= "imgFood"/>

        <p className= "name">{name}
        </p>
        <p className="price">${price}
        </p>
        <button className= "addproduct" onClick={add}>Add</button>
    </section>
)
}