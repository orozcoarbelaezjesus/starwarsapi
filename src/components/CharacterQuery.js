import React from "react";
import Loader from "./Loader";
import Window from "./Window";
// import { gql, useQuery } from "apollo-boost";
import { gql, useQuery } from '@apollo/client';
import { Query } from "react-apollo";
import { Card, Typography } from "antd";

const { Title } = Typography;

export default class CharacterQuery extends React.Component {

  state = {
    data: {}
  }

  // allPeople(client, after) {
  //   const allPeopleQuery = gql`
  //     query peoples($after: String!) {
  //         allPeople(first:10,after: $after) {
  //           pageInfo {
  //           hasNextPage,
  //           hasPreviousPage,
  //           startCursor,
  //           endCursor,
  //         },
  //         totalCount,
  //         people {
  //           id
  //           name
  //           filmConnection{
  //             films{
  //               title
  //               planetConnection{
  //                 planets{
  //                   name
  //                 }
  //               }
  //               director
  //               producers
  //             }
  //           }
  //         }
  //       },
  //     }
  //     `;

  //   client.query({
  //     query: allPeopleQuery,
  //     fetchPolicy: "network-only",
  //     variables: {
  //       after
  //     }
  //   })
  //     .then(result => console.log(result.data))
  // }

  render() {
    return (
      <div>
        {this.allPeople(this.props.client, "YXJyYXljb25uZWN0aW9uOjE5")}
      </div>
    )
  }
  // return (
  //     <Query query={gql`
  //         {
  //             allPeople(first:10) {
  //               pageInfo {
  //               hasNextPage,
  //               hasPreviousPage,
  //               startCursor,
  //               endCursor,
  //             },
  //             totalCount,
  //             people {
  //               id
  //               name
  //               filmConnection{
  //                 films{
  //                   title
  //                   planetConnection{
  //                     planets{
  //                       name
  //                     }
  //                   }
  //                   director
  //                   producers
  //                 }
  //               }
  //             }
  //           },
  //         }
  //       `}>
  //         {({ loading, error, data }) => {
  //             if (loading) return <Loader />
  //             if (error) return <p>Error</p>

  //             return (
  //                 <div className="row d-flex justify-space-around">
  //                     {data.allPeople.people.map(character => {
  //                         return (
  //                             <Card style={{ width: 300 }} className="text-center mt-2 col-12" key={character.id}>
  //                                 <Title level={4}>{character.name}</Title>
  //                                 <Window
  //                                     title={character.name}
  //                                     movies={character.filmConnection.films}
  //                                 />
  //                             </Card>
  //                         )
  //                     })}
  //                 </div>
  //             )
  //         }}
  //     </Query>
  // )
}