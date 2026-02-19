実装を完了しました。Issue #9 の受け入れ条件を満たす最小変更です。

**変更内容**
- `src/components/RandomNumberPanel.jsx:1`
  - `useState` を追加
  - 初期表示用の数値エリアを追加（初期値 `0`）
  - 「ランダム生成」ボタンを追加
  - 押下時に `Math.floor(Math.random() * 1000)` で整数を更新
- `src/styles/global.css:33`
  - `.random-number-label` と `.random-number-value` を追加し、数値表示の可読性を最小限向上

**検証結果**
- `npm run build` 成功
- `git diff --check` 問題なし

**UI証跡**
- `.flowsmith/ui-evidence/issue-9-random-ui.png`

**実行ログ出力**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/generated-sample-repo/20260219T042507Z-issue-9/coder_output_attempt_1.md`

補足: ワークツリー上には `node_modules/.vite/` と `.flowsmith/` が未追跡として見えますが、今回のコード変更対象は上記2ファイルのみです。