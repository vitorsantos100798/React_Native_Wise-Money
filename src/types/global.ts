export type typeBox = {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  textHeader?: string | undefined;
  children?: JSX.Element[] | JSX.Element;
};
export type SignInCredentials = {
  email: string;
  password: string;
};
export type AuthProviderType = {
  signIn(credentials: SignInCredentials): Promise<void>;
  err: string;
};
export type PayloadType = {
  acessToken: string;
  expire: string;
};
