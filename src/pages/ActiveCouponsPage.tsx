import React from 'react';
import { useStreamActiveCoupons } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const ActiveCouponsPage: React.FC = () => {
  const { data, loading, error } = useStreamActiveCoupons();
  return (
    <StreamDisplay
      title="Active Coupons Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default ActiveCouponsPage;