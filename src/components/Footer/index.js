import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-4 py-3">
      <Container>
        <Row>
          <Col className="col-12">
            <div className="text-center">
              <img
                src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/brand-type-film-footer-min-600.png"
                alt="cgvfooter"
              />
            </div>
          </Col>
          <Col className="col-12">
            <div className="footer-cgv-address text-center mt-3">
              <div className="cgv-address-content">
                <div className="text-cgv-address">
                  <h5>CÔNG TY TNHH CJ CGV VIETNAM</h5>
                  <p className="mb-0">
                    Địa Chỉ:&nbsp;Tầng 2, Rivera Park Saigon - Số 7/28 Thành Thái, P.14, Q.10,
                    TPHCM.
                  </p>
                  <p className="mb-0">Hotline: 1900 6017</p>
                  <p className="mb-0">COPYRIGHT 2021 CJ CGV. All RIGHTS RESERVED .</p>
                  <div className="d-flex justify-content-center mt-2">
                    <div className="logo-footer-cgv"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
