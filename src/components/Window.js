import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Card, Typography } from 'antd';

const { Title } = Typography

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
      >
        <div className="row d-flex justify-content-center">
          {props.movies.map(movie => {
            return (
              <Card style={{ width: 300 }} className="text-center mr-2 mt-2 col-12 col-md-4 col-lg-4 col-xl-4">
                <h6>Movie Title</h6>
                <Title level={4}>{movie.title}</Title>
                <h6>Planets</h6>
                {movie.planetConnection.planets.map(planet => {
                  return (
                    <p>{planet.name}</p>
                  )
                })}
                <h6>Director</h6>
                <p>{movie.director}</p>
                <h6>Producers</h6>
                <p>{movie.producers}</p>
              </Card>
            )
          })}
        </div>
      </Modal>
    </>
  );
};

export default Window;