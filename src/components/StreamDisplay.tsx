import React from 'react';

interface StreamDisplayProps {
  title: string;
  data: any[];
  loading: boolean;
  error: string | null;
  emptyMessage?: string;
}

const StreamDisplay: React.FC<StreamDisplayProps> = ({
  title,
  data,
  loading,
  error,
  emptyMessage = 'No data received yet.',
}) => {
  return (
    <div className="stream-page">
      <h1>{title}</h1>
      {loading && <p className="loading">Loading stream data...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="stream-data">
        {data.length === 0 && !loading && !error && (
          <p className="loading">{emptyMessage}</p>
        )}
        {data.map((item, index) => (
          <div key={item.getId?.() || index} className="stream-item">
            <pre>{JSON.stringify(item.toObject(), null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamDisplay;