実装を反映しました。Issue #9 の受け入れ条件を満たす最小変更です。

- 変更: `src/components/RandomNumberPanel.jsx:1`
  - `useState` を追加し、初期表示で整数を持つ状態を実装
  - `generateRandomInteger()`（`Math.floor(Math.random() * 1000)`）で整数生成
  - ボタン文言を `ランダム生成` に変更し、`onClick` で値更新
  - `disabled` を撤去し、表示エリアを `現在の数値: {randomNumber}` に変更

検証結果:
- `git diff --check` : OK
- `npm run build` : OK（`vite build` 成功）

UI証跡:
- `.flowsmith/ui-evidence/issue-9-random-number-ui.png`

実行ログ出力:
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/generated-sample-repo/20260219T024942Z-issue-9/coder_output_attempt_1.md`