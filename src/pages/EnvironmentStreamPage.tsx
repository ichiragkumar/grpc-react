import React from 'react';
import { useEnvironmentStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const EnvironmentStreamPage: React.FC = () => {
  const { data, loading, error } = useEnvironmentStream();
  return (
    <StreamDisplay
      title="Environment Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default EnvironmentStreamPage;