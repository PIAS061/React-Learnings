import ChildComponent from "./childPages/childcomponent";
function HomePage(){
    const product = {
        name: "shirt",
        price: 100,
        id: 2
    }
    const user = {
        name: "Sadman",
        gmail: "sa20@gmail.com",
        id: 2
    }
    console.log('product: ', product)
    return (
    <>
    <p className="text-black font-bold">This is the Home Page</p>
    <div>
        <p>Products:  {product.name}</p>
        <p>Price:  {product.price}</p>
        <ChildComponent product={product} user={user} />
    </div></>

    );
}
export default HomePage; 