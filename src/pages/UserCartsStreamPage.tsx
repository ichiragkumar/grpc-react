import React from 'react';
import { useStreamUserCarts } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const UserCartsStreamPage: React.FC = () => {
  const { data, loading, error } = useStreamUserCarts();
  return (
    <StreamDisplay
      title="User Carts Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default UserCartsStreamPage;