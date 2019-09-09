export enum AuthErrorType {
  NoSuchUser,
  WrongPassword,
  UpstreamError
}
export class AuthError extends Error {
  constructor (public type: AuthErrorType, message: string) {
    super(message)
  }
}
export interface AuthProvider {
  verify(username: string, ): Promise<boolean>
}
