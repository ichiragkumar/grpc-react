import React from 'react';
import { useWalletStream } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const WalletStreamPage: React.FC = () => {
  const { data, loading, error } = useWalletStream();
  return (
    <StreamDisplay
      title="Wallet Balance Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default WalletStreamPage;