import React from 'react';
import { Image, Spin } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const { primary_accent_color } = colors;

function HeaderContent() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Spin size="small" style={{ color: '#E2F0F7', marginLeft: '20px' }} />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '60px' }}>
          Graphs
        </Link>
        {isAuthenticated && (
          <Link
            to="/profile"
            style={{ color: '#E2F0F7', paddingRight: '40px' }}
          >
            Profile
          </Link>
        )}

        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
}

export { HeaderContent };
