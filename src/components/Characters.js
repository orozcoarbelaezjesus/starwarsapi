import React from "react";
import {Card, Typography} from "antd";
import Window from "./Window";

const { Title } = Typography;

export default class Characters extends React.Component {
    render() {
        return (
            <div className="row d-flex justify-space-around">
                {this.props.data.allPeople.people.map(character => {
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
    }
}