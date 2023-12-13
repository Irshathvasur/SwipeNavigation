import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'SlidePages',
  webDir: 'dist/slide-pages',
  server: {
    androidScheme: 'https'
  }
};

export default config;
