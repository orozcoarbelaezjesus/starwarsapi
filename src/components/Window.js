import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Card, Tag, Typography } from 'antd';

const { Title, Text } = Typography

const Window = (props) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        <strong>More Info</strong>
      </Button>
      <Modal
        title={props.title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
        className= "text-center"
        bodyStyle={{backgroundColor: "slategrey", }}
      >
        <div className="row d-flex justify-content-center">
          {props.movies.map(movie => {
            return (
              <Card style={{ width: 300, backgroundColor: '#fffbfb'}} className="text-center mr-2 mt-2 col-12 col-md-4 col-lg-4 col-xl-4">
                <Title level={4} style={{fontFamily: "monospace",margin: "10px"}}>Movie Title</Title>
                <Text strong style={{fontSize: "16px"}}>{movie.title}</Text>
                <Title level={4} style={{fontFamily: "monospace"}}>Planets</Title>
                {movie.planetConnection.planets.map(planet => {
                  return (
                    <Tag style={{marginBottom: '4px'}} color="geekblue">{planet.name}</Tag>
                  )
                })}
                <Title level={4} style={{fontFamily: "monospace",margin: "10px"}}>Director</Title>
                <Text strong style={{fontSize: "16px"}}>{movie.director}</Text>
                <Title level={4} style={{fontFamily: "monospace"}}>Producers</Title>
                <Text strong style={{fontSize: "16px"}}>{movie.producers}</Text>
              </Card>
            )
          })}
        </div>
      </Modal>
    </>
  );
};

export default Window;