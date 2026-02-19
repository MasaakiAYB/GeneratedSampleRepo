実装を完了しました。Issue #9 の受け入れ条件を満たしています。

変更内容:
- `src/components/RandomNumberPanel.jsx`
  - `useState` を追加
  - 初期表示の数値エリアを追加（初期値 `0`）
  - ボタン文言を `ランダム生成` に変更
  - `onClick` で `Math.floor(Math.random() * 1000)` により整数を更新

品質確認:
- `npm run build` 成功
- `git diff --check` 問題なし

UI証跡:
- `.flowsmith/ui-evidence/issue-9-random-ui.png`

実行ログ出力:
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/generated-sample-repo/20260219T041858Z-issue-9/coder_output_attempt_1.md`

補足:
- このリポジトリ環境では依存が一部欠落していたため、検証時に `npm ci --force` で復旧してビルド確認しています。  
