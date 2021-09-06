import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../Components/MovieCard';

function SingleActor() {
  const actorId = useSelector((state) => state.SingleActor.actorId);
  const actors = useSelector((state) => state.actors.actors);

  const filteredActor = actors.filter((act) => act.id === actorId);

  return (
    <Container>
      {filteredActor.map((actor) => (
        <div key={actor.id}>
          <Row>
            <Col sm={8} style={{ padding: '50px' }}>
              <h2>{actor.name}</h2>
              <p>Gender: {actor.gender === 1 ? 'female' : 'male'}</p>
              <p>Popularity: {actor.popularity}</p>
              <h4 style={{ padding: '20px', textAlign: 'center' }}>
                {actor.name}s Movies
              </h4>
              <Row md={3}>
                {actor.known_for.map((mov) => (
                  <Col key={mov.id}>
                    <MovieCard movie={mov} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col sm={4}>
              <img
                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                alt={actor.name}
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}
export default SingleActor;
