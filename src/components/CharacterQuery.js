import { gql } from '@apollo/client';

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
                id
                title
                planetConnection{
                  planets{
                    id
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
