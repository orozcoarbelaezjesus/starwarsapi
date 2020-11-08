import React from "react";
import Loader from "./Loader";
import Window from "./Window";
import "./styles/CharacterList.css";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Card, Typography, Pagination } from "antd";
import 'antd/dist/antd.css';

const { Title } = Typography;

export default class CharacterList extends React.Component {

  // handleChange = (defaultCurrent) => {
  //   this.setState({
  //     actualPage: defaultCurrent
  //   })
  // }

  paginar = (page, pageSize) => {
    console.log("Esto trae page: ",page)
    console.log("Esto trae pageSize: ",pageSize)
    this.render()
  }

  charactersQuery = ({ after }) => {
    return (
      <Query variables={{ after }} query={gql`
          query allCharacters($after: String){
              allPeople(first: 10,after: $after) {
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
        `}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />
          if (error) return <p>Error</p>
          
          return (
            <div className="row d-flex justify-space-around">
              {data.allPeople.people.map(character => {
                return (
                  <Card style={{ width: 300 }} className="text-center mt-2 col-12" key={character.id}>
                    <Title level={4}>{character.name}</Title>
                    <Window
                      title={character.name}
                      movies={character.filmConnection.films}
                    />
                  </Card>
                )
              })}
            </div>
          )
        }}
      </Query>
    )
  }

  render(){
    return (
      <div className="character-list text-center font-italic">
        <Title level={1}>Characters</Title>
            <CharactersQuery />
        <Pagination simple defaultCurrent={1} total={82} onChange={this.paginar}/>
      </div>
    )
  }
}