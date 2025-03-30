import React, { FormEvent, useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import AdminContext from "../context/AdminContext";
import {produce} from 'immer'

function ProductForm() {
  const { isLoading, products, setProducts, setLoading} = useContext(AdminContext);
  const [ error, setError ] = useState('');
  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
  });
  const { image1,image2} = images
  const [item, setItem] = useState({
    name: "",
    alergies: "",
    category: "",
    price: "",
    rating: "",
    description: "",
    bestseller: false,
    images:{
      image1:'', image2:'', image3:'', image4:''
    }
  });
  function clearForm(){
    setItem({
      name: "",
      alergies: "",
      category: "",
      price: "",
      rating: "",
      description: "",
      bestseller: false,
    });
    setImages({
      image1: "",
      image2: "",
      image3: "",
      image4: "",
    })
  }
    async function handleFormSubmit(event:FormEvent){
      event.preventDefault();
      setLoading(true);
      setError('')
   
       
      console.log(item);
      
      
    
      
    };
 useEffect(() =>{
  setItem( item => produce(item, (draft) =>{
    draft.images.image1 = image1
    draft.images.image2 ='dfgs'
    draft.images.image3 ='dfgs'
    draft.images.image4 ='dfgs'
    draft.category = 'ckar'
   }))
 },[item])

 
 
  return (
    <form
      onSubmit={handleFormSubmit}
      className=" mx-auto overflow-hidden min-w-[350px] md:w-md mt-5 lg:w-lg border border-red-50 p-6 rounded-sm shadow shadow-red-300"
    >
      <div className="flex justify-between">
        <label htmlFor="image1" className="cursor-pointer">
          <img
            src={images.image1 ? URL.createObjectURL(images.image1) : ""}
            className="size-16 md:size-20 border border-red-100 rounded-sm"
            alt=""
          />
          <input
            type="file"
            id="image1"
            hidden
            onChange={(e) =>
              setImages({ ...images, image1: e.target.files[0] })
            }
          />
        </label>
        <label htmlFor="image2" className="cursor-pointer">
          <img
            src={images.image2 ? URL.createObjectURL(images.image2) : ""}
            className="size-16 md:size-20  border border-red-100 rounded-sm"
            alt=""
          />
          <input
            type="file"
            id="image2"
            hidden
            onChange={(e) =>
              setImages({ ...images, image2: e.target.files[0] })
            }
          />
        </label>
        <label htmlFor="image3" className="cursor-pointer">
          <img
            src={images.image3 ? URL.createObjectURL(images.image3) : ""}
            className="size-16 md:size-20  border border-red-100 rounded-sm"
            alt=""
          />
          <input
            type="file"
            id="image3"
            hidden
            onChange={(e) =>
              setImages({ ...images, image3: e.target.files[0] })
            }
          />
        </label>
        <label htmlFor="image4" className="cursor-pointer">
          <img
            src={images.image4 ? URL.createObjectURL(images.image4) : ""}
            className="size-16 md:size-20  border border-red-100 rounded-sm"
            alt=""
          />
          <input
            type="file"
            id="image4"
            hidden
            onChange={(e) =>
              setImages({ ...images, image4: e.target.files[0] })
            }
          />
        </label>
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
          placeholder="Name"
          className="border border-red-100  rounded-sm px-2 mt-3 min-md:w-52 h-10"
        />
        <input
          type="text"
          value={item.alergies}
          onChange={(e) => setItem({ ...item, alergies: e.target.value })}
          placeholder="Alergies"
          className="border w-full border-red-100 py-2 h-10 rounded-sm px-2 my-3"
        />
      </div>
      <select
        id="category"
        value={item.category}
        onChange={(e) => setItem({ ...item, category: e.target.value })}
        className="border border-red-100 w-full h-10 rounded-sm px-2 text-gray-500"
      >
        <option value="">Select Category</option>
        <option value="salad">Salad</option>
        <option value="birthdaay">Birthday cake</option>
        <option value="cup_cake">Cup cake</option>
      </select>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          value={item.price}
          onChange={(e) => setItem({ ...item, price: e.target.value })}
          placeholder="Price"
          className="border border-red-100  rounded-sm px-2 mt-3 min-md:w-52 h-10"
        />
        <input
          type="text"
          placeholder="Rating"
          value={item.rating}
          onChange={(e) => setItem({ ...item, rating: e.target.value })}
          className="border w-full border-red-100 py-2 h-10 rounded-sm px-2 my-3"
        />
      </div>
      <textarea
        placeholder="Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
        cols={10}
        rows={4}
        className="border w-full border-red-100 py-2  rounded-sm px-2 my-3"
      ></textarea>
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          checked={item.bestseller}
          onChange={() => setItem({ ...item, bestseller: !item.bestseller })}
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Bestseller
        </label>
      </div>
      <button className="w-full h-10 border-red-300 border hover:bg-red-300 cursor-pointer my-6 rounded-sm text-red-900 bg-red-100">
        { isLoading ? 'Adding product.........' : 'Add product'}
      </button>
    </form>
  );
}

export default ProductForm;
