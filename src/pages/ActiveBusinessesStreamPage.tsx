import React from 'react';
import { useStreamActiveBusinessesStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const ActiveBusinessesStreamPage: React.FC = () => {
  const { data, loading, error } = useStreamActiveBusinessesStream();
  return (
    <StreamDisplay
      title="Active Businesses Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default ActiveBusinessesStreamPage;