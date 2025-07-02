import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="stream-page">
      <h1>Welcome to the gRPC Stream Client</h1>
      <p>Select a stream from the sidebar to view real-time data.</p>
      <p>
        **Important Note:** This client uses `grpc-web`. If you encounter CORS
        errors, you likely need an Envoy proxy or similar gRPC-Web compatible
        proxy in front of your NestJS gRPC server. The server is expected to be
        running at{' '}
        <code>{import.meta.env.VITE_GRPC_URL || 'http://localhost:50051'}</code>.
      </p>
    </div>
  );
};

export default HomePage;