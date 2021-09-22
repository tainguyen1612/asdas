import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../redux/actions/newsAction';
import { getNewsSelector } from '../../redux/selectors/newsSelector';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './news.scss';

function News() {
  const news = useSelector(getNewsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  return (
    <Container>
      {news.map((el, index) => {
        const url = '/news/detail/' + el.id;
        return (
          <Row key={index} className="mt-3">
            <Col>
              <Card>
                <Card.Img variant="left" src={el.image1} className="card__img" />
                <Card.Body className="card__body">
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.description1}</Card.Text>
                  <Link className="movie-item-link" to={url}>
                    More Info
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default News;
