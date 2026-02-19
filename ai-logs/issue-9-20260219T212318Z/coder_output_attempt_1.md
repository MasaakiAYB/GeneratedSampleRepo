実装を完了しました。変更は最小限です。

- 変更: `src/components/RandomNumberPanel.jsx:3`
- 内容: `generateRandomNumber` を `toFixed(2)`（小数文字列）から `Math.floor(Math.random() * 1000)`（0〜999の整数）へ変更

検証結果:

- `npm run build` 成功
- `git diff --check` 成功

UI証跡:

- `/home/runner/work/FlowSmith/FlowSmith/.agent/workspaces/masaakiayb-generatedsamplerepo/.flowsmith/ui-evidence/issue-9-random-number-ui.png`

実行ログ出力:

- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T212318Z-issue-9/coder_output_attempt_1.md`