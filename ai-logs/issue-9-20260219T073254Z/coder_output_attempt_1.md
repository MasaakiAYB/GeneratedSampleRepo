実装を最小変更で反映しました。既存のランダム生成UI（小数点2桁・履歴10件・日本語表示）は維持しつつ、日本語統一のため以下を修正しています。

- 変更: 履歴テーブル見出しを `No` から `番号` に変更  
  - `src/components/RandomNumberPanel.jsx:30`

品質ゲート・確認結果:

- `npm ci` 実行（依存を再構築）
- `npm run build` 成功
- `git diff --check` 成功
- UI証跡画像を保存  
  - `.flowsmith/ui-evidence/issue-9-random-number-ui.png`
- 実行ログ/変更要約を保存  
  - `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T073254Z-issue-9/coder_output_attempt_1.md`