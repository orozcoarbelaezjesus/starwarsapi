import React from 'react';
import ReactDOM from 'react-dom';
import Page from './pages/Page';
import reportWebVitals from './reportWebVitals';
// import ApolloClient from "apollo-boost";
import { HttpLink, ApolloLink, concat, ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.css";

const httpLink = new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://graphql.org/swapi-graphql'});

const corsAllowOrigin = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'Access-Control-Allow-Origin':'http://localhost:3000',
      
    }
  });

  return forward(operation);
})

const enchancedFetch = (url, init) => {
  return fetch(url, {
      ...init,
      headers: {
          ...init.headers,
          'Access-Control-Allow-Origin': '*',
      },
  }).then(response => response)
}

const link = new HttpLink({
  uri: 'http://localhost:49495',
  // fetchOptions: {
  //   mode: 'no-cors',
  // },
  // fetch: enchancedFetch,
})

const client = new ApolloClient({
    link: link,
    // link: httpLink,
    // fetchOptions: {
    //   mode: 'no-cors',
    // },
    cache: new InMemoryCache(),
    // headers: {
    //   "Access-Control-Allow-Origin": "*" // Required for CORS support to work
    // },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Page client={client}/>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
