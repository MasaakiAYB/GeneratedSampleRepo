実装を完了しました。Issue #9 の受け入れ条件を満たす最小差分です。

- `src/components/RandomNumberPanel.jsx:1`  
  `useState` を追加し、初期値 `0` の数値表示エリアを実装。  
  ボタン文言を「ランダム生成」に変更し、押下ごとに `Math.floor(Math.random() * 1000)` で整数を更新するようにしました。
- `src/styles/global.css:33`  
  数値ラベルと表示値の最小スタイル（視認性向上）を追加しました。

検証結果:
- `git diff --check`：OK
- `npm run build`：OK（`vite v5.4.11` でビルド成功）

UI証跡:
- `.flowsmith/ui-evidence/issue-9-random-number-ui.png`

実行ログ記録:
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T014751Z-issue-9/coder_output_attempt_1.md`