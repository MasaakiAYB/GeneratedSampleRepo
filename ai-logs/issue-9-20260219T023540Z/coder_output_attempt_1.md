対応完了しました。Issue #9 の要件に沿って、最小変更で UI を実装しています。

**変更内容**
- `src/components/RandomNumberPanel.jsx`
  - `useState` を追加
  - 初期表示で整数値を表示するエリアを追加
  - ボタン文言を `ランダム生成` に変更
  - ボタン押下ごとに `Math.floor(Math.random() * 1000)` で整数を更新
- `src/styles/global.css`
  - 数値表示の可読性向上用に `.random-number-label` / `.random-number-value` を追加

**検証結果**
- `npm run build` 成功
- `git diff --check` 成功

**UI証跡**
- `.flowsmith/ui-evidence/issue-9-random-number-ui.png`

**実行ログ記録**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/generated-sample-repo/20260219T023540Z-issue-9/coder_output_attempt_1.md` に記載済みです。