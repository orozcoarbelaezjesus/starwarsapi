import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Card, Tag, Typography, Divider } from 'antd';

const { Title, Text } = Typography

const Window = (props) => {

  const [visible, setVisible] = useState(false);

  return (
    <React.Fragment>
      <Button type="primary" onClick={() => setVisible(true)}>
        <Text strong style={{color: "white"}}>More Info</Text>
      </Button>
      <Modal
        title={<Divider><Title level={4} style={{fontFamily: "monospace"}}>{props.title}</Title></Divider>}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        className= "text-center"
        bodyStyle={{backgroundColor: "#0e0042"}}
        cancelText={<Text strong style={{fontFamily: "monospace"}}>Close</Text>}
        okText={<Text strong style={{fontFamily: "monospace"}}>Ok</Text>}
      >
        <div className="row d-flex justify-content-center">
          {props.movies.map(movie => {
            return (
              <Card style={{ width: 300, backgroundColor: '#fffbfb'}} className="text-center mr-2 mt-2 col-12 col-md-4 col-lg-4 col-xl-4" key={movie.id}>
                <Divider><Title level={5} style={{fontFamily: "monospace",margin: "10px"}}>Movie Title</Title></Divider>
                <Text strong style={{fontSize: "14px"}}>{movie.title}</Text>
                <Divider><Title level={5} style={{fontFamily: "monospace"}}>Planets</Title></Divider>
                {movie.planetConnection.planets.map(planet => {
                  return (
                    <Tag style={{marginBottom: '4px'}} color="geekblue" key={planet.id}>{planet.name}</Tag>
                  )
                })}
                <Divider><Title level={5} style={{fontFamily: "monospace",margin: "10px"}}>Director</Title></Divider>
                <Text strong style={{fontSize: "14px"}}>{movie.director}</Text>
                <Divider><Title level={5} style={{fontFamily: "monospace"}}>Producers</Title></Divider>
                <Text strong style={{fontSize: "14px"}}>{movie.producers}</Text>
              </Card>
            )
          })}
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Window;