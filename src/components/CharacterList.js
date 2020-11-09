import React from "react";
import "./styles/CharacterList.css";
import { Typography, Pagination, Divider } from "antd";
import 'antd/dist/antd.css';
import { allPeople } from "./CharacterQuery";
import Characters from "./Characters";
const { Title } = Typography;

export default class CharacterList extends React.Component {
  constructor(props) {
    super(props)
    this.loadPeople(1)
  }

  state = {
    actualPage: 1,
    data: {}
  }

handleChange = (page, pageSize) => {
  this.loadPeople(page)
}

loadPeople(page){
  let first
  let last
  let after
  let before
  if(this.state.actualPage===page){
    first=10
    last=null
    after=""
    before=""
  } else{
    if(this.state.actualPage<page){
      after=this.state.data.allPeople.pageInfo.endCursor
      before=""
      if(page===9){
        first=2
        last=null
      } else {
        first=10
        last=null
      }
    } else{
      first=null
      last=10
      after=""
      before=this.state.data.allPeople.pageInfo.startCursor
    }
  } 
  allPeople(this.props.client,first,last,after,before)
    .then(result => {
      this.setState({
        data: result.data,
        actualPage: page
      })
    })
    .catch(error => {
      return <h1>{Error}</h1>
    })
}

render(){
  let charactersComponent = null;
  if (Object.keys(this.state.data).length === 0) {
    charactersComponent = null
  } else {
    charactersComponent = <Characters data={this.state.data} />
  }
  return (
    <div className="character-list text-center font-italic">
      <Divider><Title level={3} style={{fontFamily: "monospace"}}>Characters</Title></Divider>
      {charactersComponent}
      <Pagination simple defaultCurrent={1} total={82} onChange={this.handleChange} />
    </div>
  )
}
}