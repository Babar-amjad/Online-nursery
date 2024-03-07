import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../plantsData/PlantsData"
import Plants from "../../pages/plants/Plants";

const PlantsDetials = () => {
  const { id } = useParams();
  const [plants, setPlants] = useState({});
 
 const [relatedPlants,setRelatedPlants]=useState([])

  useEffect(() => {
    const filterPlants = items.filter((plants) => plants.id == id);//used for spacfic id
    setPlants(filterPlants[0]);

    const relatedPlants=items.filter((p)=>p.category===plants.category)//used for relted plants category

    // console.log("Relatedplants :",relatedPlants)
    setRelatedPlants(relatedPlants)
  }, [id ,plants.category]);
  return (
    <div className="sm:mt-96 md:mt-2">
      <div>
        {
          <a
            href="#"
            className="flex flex-col  mx-auto my-10 items-center p-10  justify-between bg-green-500 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700"
          >
            <img
              className="object-cover   w-full rounded-t-lg h-96 md:h-auto md:w-72  md:rounded-none md:rounded-s-lg"
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
            <button className="bg-orange-600 mx-2 my-2 text-black p-3 shadow-2xl rounded-2xl" type="button">Add to cart</button>
          </a>
        }
      </div>
      <h1 className="text-center text-4xl font-bold mx-3 my-4">Related Plants</h1>
      <Plants items={relatedPlants}/>
    </div>
  );
};

export default PlantsDetials;
