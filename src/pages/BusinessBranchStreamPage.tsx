import React from 'react';
import { useBusinessBranchStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const BusinessBranchStreamPage: React.FC = () => {
  const { data, loading, error } = useBusinessBranchStream();
  return (
    <StreamDisplay
      title="Business Branch Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default BusinessBranchStreamPage;