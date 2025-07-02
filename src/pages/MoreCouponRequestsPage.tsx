import React from 'react';
import { useStreamMoreCouponRequests } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const MoreCouponRequestsPage: React.FC = () => {
  const { data, loading, error } = useStreamMoreCouponRequests();
  return (
    <StreamDisplay
      title="More Coupon Requests Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default MoreCouponRequestsPage;