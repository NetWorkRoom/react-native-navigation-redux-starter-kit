// @flow

import { Navigation } from 'react-native-navigation';

import { LOGIN_SCREEN, DASHBOARD_SCREEN } from './Screens';
import registerScreens from './registerScreens';

// Register all screens on launch
registerScreens();

export function pushAuthentication() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: 'white'
      },
      title: {
        color: 'black',
      },
      backButton: {
        title: '', // Remove previous screen name from back button
        color: 'white'
      },
      buttonColor: 'black',
    },
    statusBar: {
      style: 'dark'
    },
    layout: {
      orientation: ['portrait']
    }
  });

  Navigation.setRoot({
    root: {
      component: {
        name: LOGIN_SCREEN
      }
    }
  });
}

export function pushDashboard() {
  Navigation.setRoot({
    root: {
      component: {
        name: DASHBOARD_SCREEN
      }
    }
  });
}
