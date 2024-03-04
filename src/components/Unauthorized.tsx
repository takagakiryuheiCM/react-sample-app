import { requestCodeFlow } from "../auth/utils/requestCodeFlow";

export function Unauthorized(): React.ReactElement {
  return (
    <div>
      <div>ログインしていません。</div>
      <button onClick={() => requestCodeFlow()}>ログイン</button>
    </div>
  );
}
