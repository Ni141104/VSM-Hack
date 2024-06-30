'use client'
import  { useState, useEffect } from 'react';
import Card from './Card'

const Container = () => {
    const [data, setData] = useState([
    {
        "id" :1,
      "Brand": "OPPO",
      "Model": "A53",
      "Color": "Moonlight Black",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.5,
      "sellingPrice": 11990,
      "price": 15990,
      "image": 'https://m.media-amazon.com/images/I/61Z6wQSy5IL._SX569_.jpg'
    },
    {
        "id" :2,
      "Brand": "Samsung",
      "Model": "A53",
      "Color": "Mint Cream",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.5,
      "sellingPrice": 11990,
      "price": 15990,
      "image": 'https://m.media-amazon.com/images/I/41-gx+qLaML.jpg'
    },
    {
        "id" :3,
      "Brand": "Vivo",
      "Model": "A53",
      "Color": "Moonlight Black",
      "Memory": "6 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 13990,
      "price": 17990,
      "image": 'https://m.media-amazon.com/images/I/71AtHnoRcML._SX679_.jpg'

    },
    {
        "id" :4,
      "Brand": "Realme",
      "Model": "A53",
      "Color": "Mint Cream",
      "Memory": "6 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 13990,
      "price": 17990,
      "image":'https://m.media-amazon.com/images/I/41-gx+qLaML.jpg'
    },
    {
        "id" :5,
      "Brand": "OPPO",
      "Model": "A53",
      "Color": "Electric Black",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.5,
      "sellingPrice": 11990,
      "price": 15990,
      "image":'https://m.media-amazon.com/images/I/71Dwg4W-yVL._SX569_.jpg'
    },
    {
        "id":6,
      "Brand": "Samsung",
      "Model": "A53",
      "Color": "Electric Black",
      "Memory": "6 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 13990,
      "price": 17990,
      "image":'https://m.media-amazon.com/images/I/71pu5oj8MvL._SX569_.jpg'
    },
    {
        "id":7,
      "Brand": "Realme",
      "Model": "A12",
      "Color": "Deep Blue",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.4,
      "sellingPrice": 10490,
      "price": 11990,
      "image":'https://m.media-amazon.com/images/I/4177c2ZHDvL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        "id":8,
      "Brand": "Vivo",
      "Model": "A12",
      "Color": "Black",
      "Memory": "3 GB",
      "Storage": "32 GB",
      "Rating": 4.4,
      "sellingPrice": 9490,
      "price": 10990,
      "image":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQetZ3nTqsC-wNdMwQt6rEc-69_SSXeqX2KZA&s'

    },
    {
        "id":9,
      "Brand": "OPPO",
      "Model": "A12",
      "Color": "Blue",
      "Memory": "3 GB",
      "Storage": "32 GB",
      "Rating": 4.4,
      "sellingPrice": 9490,
      "price": 10990,
      "image":'https://m.media-amazon.com/images/I/41QGIZA-EoL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
        "id":10,
      "Brand": "Samsung",
      "Model": "A12",
      "Color": "Flowing Silver",
      "Memory": "3 GB",
      "Storage": "32 GB",
      "Rating": 4.4,
      "sellingPrice": 9490,
      "price": 10990,
      "image": 'https://m.media-amazon.com/images/I/61i9Pvstz5L._SX569_.jpg'
    },
    {
        "id":11,
      "Brand": "Gionee",
      "Model": "A12",
      "Color": "Deep Blue",
      "Memory": "3 GB",
      "Storage": "32 GB",
      "Rating": 4.4,
      "sellingPrice": 9490,
      "price": 10990,
      "image":'https://m.media-amazon.com/images/I/51OkBXwgipL._SX569_.jpg'
    },
    {
        "id" :12,
      "Brand": "OPPO",
      "Model": "A12",
      "Color": "Flowing Silver",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.4,
      "sellingPrice": 10490,
      "price": 11990,
      "image":'https://m.media-amazon.com/images/I/61A4Ta1EU9L._SX569_.jpg'
    },
    {
        "id" :13,
      "Brand": "Acer",
      "Model": "A53s 5G",
      "Color": "Crystal Blue",
      "Memory": "6 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 15990,
      "price": 16990,
      "image":'https://m.media-amazon.com/images/I/61b3e7zBNXL._SX569_.jpg'
    },
   
    {
        "id" :15,
      "Brand": "Vivo",
      "Model": "A12",
      "Color": "Blue",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.4,
      "sellingPrice": 10490,
      "price": 11990,
      "image": 'https://m.media-amazon.com/images/I/81QNwVMrJZL._SX425_.jpg'
    },
 
   
    {
        "id" :19,
      "Brand": "OPPO",
      "Model": "A31",
      "Color": "Lake Green",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.3,
      "sellingPrice": 11960,
      "price": 12990,
      "image":'https://m.media-amazon.com/images/I/71RcXQBjXrL._SX425_.jpg'
    },
    {
        "id" :20,
      "Brand": "Nokia",
      "Model": "A31",
      "Color": "Mystery Black",
      "Memory": "4 GB",
      "Storage": "64 GB",
      "Rating": 4.3,
      "sellingPrice": 11779,
      "price": 11919,
      "image":'https://m.media-amazon.com/images/I/71KCwNV6MuL._SX425_.jpg'
    },
    {
        "id" :21,
      "Brand": "Samsung",
      "Model": "A74 5G",
      "Color": "Fantastic Purple",
      "Memory": "6 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 18979,
      "price": 18979,
      "image":'https://m.media-amazon.com/images/I/71PrvMR6-sL._SX425_.jpg'
    },
    {
        "id" :22,
      "Brand": "Vivo",
      "Model": "A11K",
      "Color": "Flowing Silver",
      "Memory": "2 GB",
      "Storage": "32 GB",
      "Rating": 4.2,
      "sellingPrice": 8990,
      "price": 10990,
      "image":'https://m.media-amazon.com/images/I/81D0oZVM7DL._SX569_.jpg'
    },
    {
        "id" :23,
      "Brand": "OPPO",
      "Model": "F17 Pro",
      "Color": "Matte Black",
      "Memory": "8 GB",
      "Storage": "128 GB",
      "Rating": 4.3,
      "sellingPrice": 19990,
      "price": 25990,
      "image":'https://m.media-amazon.com/images/I/81xEjr0sLbL._SX569_.jpg'
    },
    {
        "id" :24,
      "Brand": "OPPO",
      "Model": "A54",
      "Color": "Moonlight Gold",
      "Memory": "4 GB",
      "Storage": "128 GB",
      "sellingPrice": 19990,
      "price": 25990,
      "image":'https://m.media-amazon.com/images/I/615QP+M8G0S._SX569_.jpg'
    }
  ]
  );

 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [searchItem, setSearchItem] = useState(''); // New state for brand name
    const [filteredData, setFilteredData] = useState(data);
  
    useEffect(() => {
      const filtered = data.filter((item) => {
        const itemPrice = item.sellingPrice;
        const min = minPrice !== '' ? parseFloat(minPrice) : 0;
        const max = maxPrice !== '' ? parseFloat(maxPrice) : Infinity;
        const brandMatch = item.Brand.toLowerCase().includes(searchItem.toLowerCase()); // Check brand name
        return itemPrice >= min && itemPrice <= max && brandMatch;
      });
      setFilteredData(filtered);
    }, [minPrice, maxPrice, searchItem, data]); // Include searchItem in dependencies
  
    return (
      <div>
        <div className='flex mt-7 '>

        <div>
          <label>Min Price: </label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Max Price: </label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Search by Brand: </label>
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Enter brand name"
          />
        </div>
        </div>
        <h2>Filtered Items:</h2>
        <div className="flex flex-wrap">
          {filteredData.map((item) => (
            <Card key={item.id} {...item}>
              {item.name} - ${item.sellingPrice}
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default Container;
  
