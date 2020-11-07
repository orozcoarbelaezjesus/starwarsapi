import React from "react";
import Loader from "./Loader";
import Window from "./Window";
import "./styles/CharacterList.css";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Card, Typography, Pagination } from "antd";
import 'antd/dist/antd.css';

const { Title } = Typography;

const CharactersQuery = () => {
  return (
    <Query query={gql`
        {
            allPeople(first: 10) {
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

export default class CharacterList extends React.Component {

  state = {
    actualPage: 1
  }

  handleChange = (defaultCurrent) => {
    this.setState({
      actualPage: defaultCurrent
    })
  }

  render(){
    return (
      <div className="character-list text-center font-italic">
        <Title level={1}>Characters</Title>
        <CharactersQuery />
        <Pagination simple defaultCurrent={1} total={82} onChange={this.handleChange} />
      </div>
    )
  }
}