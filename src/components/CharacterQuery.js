import React from "react";
import Loader from "./Loader";
import Window from "./Window";
// import { gql, useQuery } from "apollo-boost";
import { gql, useQuery } from '@apollo/client';
import { Query } from "react-apollo";
import { Card, Typography } from "antd";

const { Title } = Typography;

export function allPeople(client, first, last, after, before) {
    const allPeopleQuery = gql`
      query peoples($first: Int,$last: Int,$after: String,$before: String) {
          allPeople(first:$first,last:$last,after: $after,before: $before) {
            pageInfo {
            hasNextPage,
            hasPreviousPage,
            startCursor,
            endCursor,
          },
          totalCount,
          people {
            id
            name
            filmConnection{
              films{
                title
                planetConnection{
                  planets{
                    name
                  }
                }
                director
                producers
              }
            }
          }
        },
      }
      `;

    return client.query({
      query: allPeopleQuery,
      fetchPolicy: "network-only",
      variables: {
        first,
        last,
        after,
        before
      }
    })
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