import React, {useState} from 'react';
import Product from './Product';
import './Home.css';
import { useStateValue } from './StateProvider';

const Home = () => {

    const [{searchedWord}] = useStateValue();
    const [searchedProduct, setSearchedProduct] = useState([]);

    // useEffective(()=>{
    //     const 
    // }, []);


    return(
        
        
        <div className="home">
            <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
            alt=""
            className="home_image"
            />

            { (!searchedWord &&
            <div className="home_row">

                <Product 
                id= "7"
                // key={Math.random()*100000}
                title="OLW Sourcream and Onion"
                image="https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Sourcream-Onion-800x750.png"
                price={100}
                rating={3}
                />
                 <Product 
                id= "8"
                // key={Math.random()*100000}
                title="OLW Dill and Graslok"
                image="https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Dill-Gr%C3%A4sl%C3%B6k-800x750.png" 
                price={100}
                rating={3}
                />
                 <Product 
                id="9"
                // key={Math.random()*100000}
                title="OLW 3*Onion"
                image="https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-3xL%C3%96K-800x750.png" 
                price={100}
                rating={3}
                />
                 <Product 
                id="10"
                // key={Math.random()*100000}
                title="OLW Grill"
                image="https://brands-b.prod.onewp.net/app/uploads/sites/41/2018/12/OLW-CHIPS-Grill-800x750.png" 
                price={100}
                rating={3}
                />

                <Product 
                id="10"
                // key={Math.random()*100000}
                title="Estrella Dill"
                image="https://www.estrella.se/content/uploads/2020/05/thumbnails/10647-dill-275g-475-400x0.png" 
                price={100}
                rating={3}
                />
            </div>
            )}
            

        </div>

    )
}

export default Home;