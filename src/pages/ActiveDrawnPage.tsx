import React from 'react';
import { useStreamActiveDrawn } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const ActiveDrawnPage: React.FC = () => {
  const { data, loading, error } = useStreamActiveDrawn();
  return (
    <StreamDisplay
      title="Active Drawn Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default ActiveDrawnPage;