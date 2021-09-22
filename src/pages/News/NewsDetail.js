import React, { useEffect } from 'react';
import { Col, Row, Container, Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailNews } from '../../redux/actions/newsAction';
import { getNewDetailSelector } from '../../redux/selectors/newsSelector';
import './news.scss';

function NewsDetail() {
  const { id } = useParams();
  const detailNew = useSelector(getNewDetailSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailNews(id));
  }, [dispatch]);

  console.log(detailNew);

  return (
    <Container>
      <Row>
        <Col lg="12">
          <article>
            <h1>{detailNew.title}</h1>
            <section>
              <Figure>
                <Figure.Image alt="image for section 1" src={detailNew.image1} />
              </Figure>
              <p>{detailNew.description1}</p>
            </section>
            <section>
              <Figure>
                <Figure.Image
                  width="100%"
                  height="100%"
                  alt="image for section 2"
                  src={detailNew.image2}
                />
              </Figure>
              <p>{detailNew.description2}</p>
            </section>
            <section>
              <Figure>
                <Figure.Image
                  width="100%"
                  height="100%"
                  alt="image for section 3"
                  src={detailNew.image3}
                />
              </Figure>
              <p>{detailNew.description3}</p>
            </section>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsDetail;
