import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DataTable from './components/Tables/DataTable';
import axiosClient from '../../../../api/admin/axiosClient';

function Ticket() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchDataTickets = async () => {
      const response = await axiosClient.get('/tickets');
      setTickets(response.data);
    };
    fetchDataTickets();

    return () => {
      setTickets([]);
    };
  }, []);

  return (
    <div className="content">
      <Row>
        <Col>
          <h1 className="text-center">Tickets</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable tickets={tickets} />
        </Col>
      </Row>
    </div>
  );
}

export default Ticket;
