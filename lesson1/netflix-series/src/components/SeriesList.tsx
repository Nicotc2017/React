import React from 'react';
import { seriesList, Series } from '../data/series';

const SeriesList: React.FC = () => {
    return (
        <div className="series-list">
            {seriesList.map((series: Series) => (
                <div key={series.rank} className="series-item">
                    <img src={series.image} alt={series.name} />
                    <h2>{series.name}</h2>
                    <p>{series.description}</p>
                    <p>Rating: {series.rate}</p>
                    <p>Seasons: {series.seasons}</p>
                    <p>Status: {series.running ? 'Running' : 'Ended'}</p>
                </div>
            ))}
        </div>
    );
};

export default SeriesList; 