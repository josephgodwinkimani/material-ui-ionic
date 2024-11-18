import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.materialui.ionic',
  appName: 'material-ui-ionic',
  webDir: 'dist',
  plugins: {
    // Enable the patching of fetch and XMLHttpRequest to use native libraries instead.
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
