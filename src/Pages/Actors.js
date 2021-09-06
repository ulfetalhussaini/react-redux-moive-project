import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { fetchActors } from '../redux/ActorsReducer';
import ActorsCard from '../Components/ActorsCard';

function Actors() {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actors.actors);

  useEffect(() => {
    dispatch(fetchActors());
  }, [fetchActors]);

  return (
    <div>
      <Container>
        <Row>
          {actors.map((actor) => (
            <ActorsCard key={actor.id} actor={actor} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Actors;
