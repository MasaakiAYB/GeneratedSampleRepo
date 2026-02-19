実装完了しました。Issue #9 の受け入れ条件を満たす最小変更です。

**変更内容**
- `src/components/RandomNumberPanel.jsx`
  - `useState` を追加
  - 初期値 `0` の数値表示エリアを追加
  - `ランダム生成` ボタンを追加
  - ボタン押下で `Math.floor(Math.random() * 1000)` に更新する処理を追加
- `src/styles/global.css`
  - `.random-number-label` と `.random-number-value` を追加（可読性向上の最小スタイル）

**品質確認**
- `git diff --check` : 問題なし
- `npm run build` : 成功

**UI証跡**
- `.flowsmith/ui-evidence/issue-9-random-number-panel.png`

**実行ログ出力**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/generated-sample-repo/20260219T030559Z-issue-9/coder_output_attempt_1.md`