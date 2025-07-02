import React from 'react';
import { useZonesStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const ZonesStreamPage: React.FC = () => {
  const { data, loading, error } = useZonesStream();
  return (
    <StreamDisplay
      title="Zones Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default ZonesStreamPage;