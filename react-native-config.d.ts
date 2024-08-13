declare module 'react-native-config' {
  export interface NativeConfig {
    PUBLIC_API_KEY: string;
    PRIVATE_API_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
