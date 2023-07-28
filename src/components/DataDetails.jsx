import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LinkContext } from '../context/LinkContext';

const AnotherComponent = () => {
  const { selectedLink } = useContext(LinkContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (selectedLink) {
      fetchData(selectedLink);
    }
  }, [selectedLink]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
     

      // Since the provided data contains only a single Pokemon object, you can access its "weight" and "height" properties directly
      const { weight, height ,name,sprites,id} = response.data;

      setData({ weight, height,name,sprites,id });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='box'>
      {selectedLink ? (
        <div>
          <h2>user Details</h2>
          {data ? (
              <div>
              <img style={{ width: 300, height: 200 }} src={data.sprites.back_default} alt="back_default" />
                <h5>Id: {data.id}</h5>
                <h5>Name: {data.name}</h5>
              <h5>Height: {data.height}</h5>
              <h5>Weight: {data.weight}</h5>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ) : (
        <p>No URL selected</p>
      )}
    </div>
  );
};

export default AnotherComponent;
