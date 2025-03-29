export default class AuthChecker {
  static verifyJwt({
    tokenType,
    toVerifyToken,
  }: {
    tokenType: TokenType
    toVerifyToken: string
  }) {}
}

enum TokenType {
  Access,
  Refresh,
}
