import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../plantsData/PlantsData";
import Plants from "../../pages/plants/Plants";

const PlantsDetials = ({ setCart, cart }) => {
  const [showAlert, setShowAlert] = useState(false);

  const addToCart = (id, image, name, category, price) => {
    const obj = {
      id,
      image,
      name,
      category,
      price
    };

    const updatedCart = cart ? [...cart, obj] : [obj];
    setCart(updatedCart);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const { id } = useParams();
  const [plants, setPlants] = useState({});
  const [relatedPlants, setRelatedPlants] = useState([]);

  useEffect(() => {
    const filterPlants = items.filter((plant) => plant.id == id);
    setPlants(filterPlants[0]);

    const relatedPlants = items.filter((p) => p.category === plants.category);
    setRelatedPlants(relatedPlants);
  }, [id, plants.category]);

  return (
    <div className="sm:mt-96 md:mt-2">
      <div>
        <a
          href="#"
          className="flex flex-col mx-auto my-10 items-center p-10 justify-between bg-green-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 relative"
        >
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-72 md:rounded-none md:rounded-s-lg"
            src={plants.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {plants.category}
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {plants.name}
            </h5>
            <p></p>
            <p className="mb-3 font-normal text-2xl text-gray-700 dark:text-gray-400">
              {plants.price}
            </p>
          </div>
          <button
            onClick={() =>
              addToCart(
                plants.id,
                plants.image,
                plants.name,
                plants.category,
                plants.price
              )
            }
            className="bg-green-700 rounded-xl text-white p-2 my-2 mx-2"
            category="button"
          >
            Add to Cart
          </button>
          {/* Display alert message */}
          {showAlert && <div className="alert absolute top-0 right-0 bg-orange-400 text-black p-2">Item added to cart!</div>}
        </a>
      </div>
      <h1 className="text-center text-4xl font-bold mx-3 my-4">
        Related Plants
      </h1>
      <Plants items={relatedPlants} />
    </div>
  );
};

export default PlantsDetials;
