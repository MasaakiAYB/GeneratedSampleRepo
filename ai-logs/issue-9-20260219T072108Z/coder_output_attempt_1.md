Issue #9 と追加フィードバックに合わせて、最小差分でUIを更新しました。

**実装内容**
- 小数点2桁のランダム数値表示に変更し、ボタン押下で更新するように変更  
`src/components/RandomNumberPanel.jsx:3` `src/components/RandomNumberPanel.jsx:9`
- 押下ごとの履歴を最新順で保持し、最大10件に制限  
`src/components/RandomNumberPanel.jsx:7` `src/components/RandomNumberPanel.jsx:12`
- 右側に履歴テーブル（No/値）を追加し、初期状態の空表示メッセージを追加  
`src/components/RandomNumberPanel.jsx:25` `src/components/RandomNumberPanel.jsx:35`
- ページ文言を日本語化  
`src/pages/RandomNumberPage.jsx:6`
- 左右レイアウト + モバイル時の縦積みスタイルを追加  
`src/styles/global.css:33` `src/styles/global.css:75`

**検証**
- `npm run build` 成功
- `git diff --check` 成功

**UI証跡**
- `.flowsmith/ui-evidence/issue-9-random-ui.png`

**実行ログ出力**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T072108Z-issue-9/coder_output_attempt_1.md`