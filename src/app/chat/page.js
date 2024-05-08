"use client"
import React, { useState } from "react";
import axios from "axios";
import { BsRecordCircleFill, BsMagic } from 'react-icons/bs';
import Header from "../components/common/Header";
// import Footer from "../components/common/Footer";

const App = () => {
  const [results, setResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [query, setQuery] = useState("");
  const [load, setLoad] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const app_id="";
    const app_key="";
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
      );
      setResults(response.data.hits);
      console.log(response.data.hits);

      setInterval(() => {
        setLoad(true);
    }, 3000);
      

      setSelectedRecipe(null)
    } catch (error) {
      alert("Error fetching data: ", error);
    }
  };

  return (


    <>
    <Header/>
    <div className="w-screen pt-[10%] rounded-sm bg-image">
      <div className="lg:w-1/2 w-full lg:m-auto my-4 bg-[#eaf2f5] p-4">
        <h1 className="text-3xl font-bold text-center my-4"> Food Recipe Search</h1>
        <form className="flex" onSubmit={handleSubmit}>
          <input
            className="w-full border-2 border-[#007676] p-2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a food item..."
          />
          <button
            className="px-4 text-white font-semibold bg-[#007676]"
            type="submit"
          >
            <BsMagic className="animate-bounce" />
          </button>
        </form>

        {load ?
          <div>
            {selectedRecipe ? (
              <div>
                <h2 className="text-[#007676] font-semibold py-4 text-center">{selectedRecipe.label}</h2>
                <img src={selectedRecipe.image} alt={selectedRecipe.label} className="m-auto" />
                <h3 className="text-[#007676] font-semibold py-4">Ingredients:</h3>
                <ul className="flex flex-col gap-2 pl-8">
                  {selectedRecipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>

                <div  className="flex gap-2 overflow-scroll my-4" title="click here to get recipe mb-10">
               
                {results.map((result) => (
                
                  <img 
                  key={result.recipe.uri} 
                  src={result.recipe.image} 
                  alt={result.recipe.label}
                  onClick={() => setSelectedRecipe(result.recipe)}
                  className="m-auto rounded-sm hover:scale-105 ease-in duration-500" />
                  
                ))}

                </div>

                <p className="text-[#007676] font-semibold py-4">Select From Below List: </p>
                <ol className="w-full text-justify pl-4 flex flex-col gap-2 ">
                  {results.map((result) => (
                    <li
                      key={result.recipe.uri}
                      onClick={() => setSelectedRecipe(result.recipe)}
                      type="1"
                      className="hover:underline hover:text-[#007676]"
                    >
                      {result.recipe.label}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
          :
          <div className="flex gap-1 justify-center items-center">
            <svg className="h-5 w-5 mt-2 animate-pulse text-[#007676]" viewBox="0 0 24 24">
              <BsRecordCircleFill />
            </svg>
            <p> Processing..</p>
          </div>

        }


      </div>
    </div>
    
    </>
  );
};

export default App;
