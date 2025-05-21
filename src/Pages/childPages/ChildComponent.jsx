import React from "react";
const ChildComponent = ({product,user}) => {
    return (
        <div className="bg-gray-50 shadow rounded-md p-4" >
            <p>This is child Component</p>
            <p>Products:  {product.name}</p>
            <p>Price:  {product.price}</p>
            <p>User:  {user.name}</p>
            <p>Price:  {user.gmail}</p>
        </div>
    );
};

export default ChildComponent;