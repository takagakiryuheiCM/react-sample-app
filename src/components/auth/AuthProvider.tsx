import React from "react";
import { getAuthInfo } from "../../utils/auth/getAuthInfo";
import { getAuthToken } from "../../utils/auth/getAuthToken";
import { TAuthInfo, setAuthInfo } from "../../utils/auth/setAuthInfo";
import { getCode } from "../../utils/auth/getCode";

type TAuthorizedContext = Readonly<{
  authInfo?: TAuthInfo;
}>;

export const AuthorizedContext = React.createContext<TAuthorizedContext>({});

export function AuthProvider({
  unauthorized,
  children,
}: Readonly<{
  unauthorized?: React.ReactElement;
  children?: React.ReactNode;
}>): React.ReactElement | null {
  // LocalStorageから認可情報取得
  const authInfo = getAuthInfo();
  React.useEffect(() => {
    // Googleのログイン画面からアプリにリダイレクトした時の処理

    if (window.location.pathname === "/") {
      // codeの取得
      const code = getCode();
      if (code != null) {
        // アクセストークンの取得
        getAuthToken(code)
          .then((token) => {
            // LocalStorageに保存
            setAuthInfo(token);
            window.location.href = "/";
          })
          .catch((err) => console.log(err));
      }
    }
  });

  if (authInfo === null) {
    // 未ログインの場合の画面を表示する
    return unauthorized ?? null;
  } else {
    // ログイン済みの場合の画面を表示する
    // Contextを使って認可情報を子コンポーネントでも使用できるようにする
    return (
      <AuthorizedContext.Provider value={{ authInfo }}>
        {children}
      </AuthorizedContext.Provider>
    );
  }
}
