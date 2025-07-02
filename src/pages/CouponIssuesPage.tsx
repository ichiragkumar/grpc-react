import React from 'react';
import { useStreamCouponIssues } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const CouponIssuesPage: React.FC = () => {
  const { data, loading, error } = useStreamCouponIssues();
  return (
    <StreamDisplay
      title="Coupon Issues Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default CouponIssuesPage;