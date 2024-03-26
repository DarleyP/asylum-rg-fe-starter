import React from 'react';
import { Layout, Card, Avatar, Spin } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;

const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Spin
        size="large"
        style={{ display: 'block', margin: '0 auto', paddingTop: '20%' }}
      />
    );
  }

  if (!isAuthenticated) {
    return (
      <Content style={{ padding: '20px', minHeight: '80vh' }}>
        Log in to view this page.
      </Content>
    );
  }

  return (
    <Layout>
      <Content style={{ padding: '20px', minHeight: '80vh' }}>
        <Card title="User Profile" style={{ maxWidth: 600, margin: '0 auto' }}>
          <Avatar size={64} src={user.picture} icon={<UserOutlined />} />
          <p>Name: {user.nickname}</p>
          <p>Email: {user.email || 'No Email Provided'}</p>
        </Card>
      </Content>
    </Layout>
  );
};

export default ProfilePage;
