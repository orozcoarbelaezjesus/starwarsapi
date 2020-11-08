import React from "react";
import CharactersQuery from "./CharacterQuery";
import "./styles/CharacterList.css";
import { Typography, Pagination } from "antd";
import 'antd/dist/antd.css';

const { Title } = Typography;

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
        <CharactersQuery client={this.props.client}/>
        <Pagination simple defaultCurrent={1} total={82} onChange={this.handleChange} />
      </div>
    )
  }
}