import React from 'react';
import ReactDOM from 'react-dom';
import Page from './pages/Page';
import reportWebVitals from './reportWebVitals';
import { HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const link = new HttpLink({
  uri: 'http://localhost:49650',
})

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
})

ReactDOM.render(
    <Page client={client}/>
  ,document.getElementById('root')
);

reportWebVitals();
