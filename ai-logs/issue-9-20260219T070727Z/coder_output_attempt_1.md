実装完了しました。Issue #9 の受け入れ条件を満たす最小変更です。

**変更内容**
- `src/components/RandomNumberPanel.jsx`
  - `useState` を追加
  - 初期表示時にランダム整数を生成して表示
  - ボタン文言を `ランダム生成` に変更
  - ボタン押下でランダム整数を再生成して表示更新

**検証結果**
- `npm run build` 成功
- `git diff --check` 問題なし

**UI証跡**
- `.flowsmith/ui-evidence/issue-9-random-number-ui.png`

**実行ログ出力**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T070727Z-issue-9/coder_output_attempt_1.md`