import React, {useState, useEffect} from 'react';
import Product from './Product';
import './Home.css';
import { useStateValue } from './StateProvider';

const Home = () => {

    const [{searchedWord}] = useStateValue();
    const [searchedProducts, setSearchedProducts] = useState([]);
    const products = [
     { 
        id: 7,
        title:"OLW Sourcream and Onion",
        image:"https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Sourcream-Onion-800x750.png",
        price:100,
        rating:3,
    },
      {  
        id:8,
        title:"OLW Dill and Graslok",
        image:"https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Dill-Gr%C3%A4sl%C3%B6k-800x750.png", 
        price:100,
        rating:3,
    },
    {
        id:9,
        title:"OLW 3*Onion",
        image:"https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-3xL%C3%96K-800x750.png",
        price:100,
        rating:3,
    }, 
     {
        id:10,
        title:"OLW Grill",
        image:"https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Grill-800x750.png",
        price:100,
        rating:3,
     },
     {
        id:11,
        title:"Estrella Dill",
        image:"https://www.estrella.se/content/uploads/2020/05/thumbnails/10647-dill-275g-475-400x0.png",
        price:100,
        rating:3,
     },
     {
        id:12,
        title:"Estrella Cripy Bcon & Sourcream",
        image:"https://www.estrella.se/content/uploads/2020/05/thumbnails/10963-crispy-bacon-sourcream-275g-871-400x0.png",
        price:100,
        rating:3,
     },
     {
        id:12,
        title:"Estrella Sourcream & Onion",
        image:"https://www.estrella.se/content/uploads/2020/04/thumbnails/10645-sourcream-onion-275g-836-400x0.png",
        price:100,
        rating:3,
     },
     
    ];

    useEffect(()=>{
        if(searchedWord!==null){
        const searchProduct = (searchedWord) => {
            products.map((product)=>{
                if(product.title.includes(searchedWord)){
                    setSearchedProducts(searchedProducts=>[...searchedProducts,product]);
                }
            });
        };
        searchProduct(searchedWord);
        }else{
            setSearchedProducts([]);
        };
        console.log("the searchedProducts(array) is ", searchedProducts);
     
    }, [searchedWord]);

    return(
         
        <div className="home">
            <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt=""
            className="home_image"
            />

            <div className="home_row">
                { 
            
                    searchedWord ? (
                        searchedProducts?.map(searchedProduct=>(
                            <Product 
                                key={Math.random()*100000}
                                id={searchedProduct.id}
                                title={searchedProduct.title}
                                image={searchedProduct.image}
                                price={searchedProduct.price}
                                rating={searchedProduct.rating}
                            />
                        )     
                    )

                    ) : (

                        products?.map(product=>(
                            <Product 
                                key={Math.random()*100000}
                                id={product.id}
                                title={product.title}
                                image={product.image}
                                price={product.price}
                                rating={product.rating}
                            />
                    )
                    )
                    )      
                } 
            </div>

        </div>

    )
}

export default Home;