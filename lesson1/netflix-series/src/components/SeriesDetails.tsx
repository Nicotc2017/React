import React from 'react';
import { useParams } from 'react-router-dom';
import { seriesList, Series } from '../data/series';
import { Container, Image } from 'react-bootstrap';

const SeriesDetails: React.FC = () => {
  const { seriesName } = useParams<{ seriesName: string }>();
  const decodedName = decodeURIComponent(seriesName || '');
  const series: Series | undefined = seriesList.find((s: Series) => s.name === decodedName);

  if (!series) {
    return (
      <Container className="text-center my-5">
        <h2>Series Not Found</h2>
        <p>The series you are looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h2>{series.name}</h2>
      <Image src={series.image} fluid alt={series.name} className="my-3" />
      <p><strong>Rating:</strong> {series.rate}</p>
      <p><strong>Start Date:</strong> {series.startYear}</p>
      <p><strong>Description:</strong> {series.description}</p>
    </Container>
  );
};

export default SeriesDetails;