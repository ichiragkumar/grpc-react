import React from 'react';
import { useStreamUserNotifications } from '../grpc-client/hooks';
import StreamDisplay from '../components/StreamDisplay';

const UserNotificationsStreamPage: React.FC = () => {
  const { data, loading, error } = useStreamUserNotifications();
  return (
    <StreamDisplay
      title="User Notifications Stream"
      data={data}
      loading={loading}
      error={error}
    />
  );
};

export default UserNotificationsStreamPage;