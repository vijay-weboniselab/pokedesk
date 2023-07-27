// ItemList.js
import React, { useEffect,useContext } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../state/ItemAction'
import { LinkContext } from '../context/LinkContext';
import './style.css'
const ItemList = ({ items, fetchItems }) => {
  const { setSelectedLink } = useContext(LinkContext);

  useEffect(() => {
    fetchItems();
  }, []);
  const handleLinkClick = (url) => {
    setSelectedLink(url);
  };


  return (
    <div className='box'>
    
      {items.map((item) => (
        <div key={item.id}>
          <button className='btn btn-light mt-3'>
          <a  onClick={() => handleLinkClick(item.url)}>{item.name}
          </a>
          </button>
          </div>
      
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps, { fetchItems })(ItemList);
