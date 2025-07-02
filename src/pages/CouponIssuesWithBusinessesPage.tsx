import React from 'react';
import { useActiveCouponIssuesWithBusinessesStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const CouponIssuesWithBusinessesPage: React.FC = () => {
  const { data, loading, error } = useActiveCouponIssuesWithBusinessesStream();
  return (
    <StreamDisplay
      title="Coupon Issues With Businesses Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default CouponIssuesWithBusinessesPage;