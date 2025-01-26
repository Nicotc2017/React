import React from 'react';
import { Table, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { seriesList, Series } from '../data/series';

const TopSeries: React.FC = () => {
  return (
    <Container className="my-5">
      <h2>Top Netflix Series</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rating</th>
            <th>Image</th>
            <th>Series Name</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {seriesList.map((series: Series) => (
            <tr key={series.name}>
              <td>{series.rate}</td>
              <td>
                <Image src={series.image} thumbnail width={100} />
              </td>
              <td>
                <Link to={`/top-series/${encodeURIComponent(series.name)}`}>{series.name}</Link>
              </td>
              <td>{series.startYear}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TopSeries;