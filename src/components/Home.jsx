import React, { useEffect } from "react";
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NavBar from "./NavBar";
import Cart from "./Cart";
import ProductsList from "./ProductsList";
import { getProducts } from "../redux/actions";
import PublicRoute from "./PublicRoute";

const Home = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/products").then((res) => {
      console.log(res.data);
      dispatch(getProducts(res.data));
    });
  }, []);

  return (
    <div className="bg-light">
      <NavBar />
      <div className="container bg-light">
      <Route exact path={match.url} component={ProductsList} />
      <Route path={match.url + '/cart'} component={Cart}/>
        
      </div>
    </div>
  );
};

export default Home;
