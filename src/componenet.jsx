import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [imageDis, setImageDis] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(response);
        console.log("This is response", response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);



  const displayImage = (()=>{
    setImageDis(number)

  })
//
//


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data: response } = await axios.get(
          `https://jsonplaceholder.typicode.com/photos/${number}`
        );
        setImageDis(response);
        console.log("This is response", response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchImage();
  }, []);




  return (
    <div>
     
        <div>
          <h2>Doing stuff with data</h2>
            <select>
            {data.map((item) => (
              <option onClick={displayImage} key={item.id} value="title">
                {item.title}
              </option>
                     ))}
            </select>
            <img src={imageDis}/>
   
        </div>
      
    </div>
  );
};

export default MyComponent;
