"use client"

import { useState } from "react"

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setCategory] = useState("");
    const [ItemCreated, setItemCreated] = useState(false);


    const handleNameChange = (event) => {
      setName(event.target.value);  
    };

    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            'name': name,
            'quantity': quantity,
            'category': category,
          };

        setName("");
        setQuantity("");
        setCategory("Produce");

        setItemCreated(true);

        alert("Name = " + "[" + newItem.name + "]" + " Quantity = " + "[" +  newItem.quantity  + "]" + " Category = " + "[" +  newItem.category + "]");

      
          
    }


    return(
        <main>
      <div className="min-h-screen bg-blue-gray-100 flex items-center justify-center">
        {ItemCreated && (
          <div className="absolute top-0 mt-8 text-2xl text-yellow-400">
            Item Created
          </div>
        )}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-8">
            Create New Item
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-800">Item Name:</span>
              <input
                required
                onChange={handleNameChange}
                value={name}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-800">Quantity:</span>
              <input
                required
                onChange={handleQuantityChange}
                value={quantity}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <label className="block mb-4 ">
              <span className="text-gray-800">Category:</span>
              <input
                required
                onChange={handleCategoryChange}
                value={category}
                className="mt-1 p-1 block w-full rounded-md text-black bg-gray-100 focus:bg-white"
              />
            </label>

            <button type = "submit" className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </main>
    )
}