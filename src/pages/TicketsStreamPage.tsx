import React from 'react';
import { useTicketsStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const TicketsStreamPage: React.FC = () => {
  const { data, loading, error } = useTicketsStream();
  return (
    <StreamDisplay
      title="Tickets Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default TicketsStreamPage;