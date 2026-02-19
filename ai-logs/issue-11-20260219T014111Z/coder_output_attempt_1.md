フロントエンド基盤を最小構成で追加し、Issue #11 の受け入れ条件を満たす状態まで実装しました。

変更内容:
- エントリポイント追加: `index.html`, `src/main.jsx`, `src/App.jsx`
- 実行基盤追加: `package.json`, `package-lock.json`, `vite.config.js`, `.nvmrc`
- UI実装向け構成追加: `src/components/`, `src/pages/`, `src/styles/`
- Issue #9 用雛形追加: `src/pages/RandomNumberPage.jsx`, `src/components/RandomNumberPanel.jsx`
- 最小スタイル追加: `src/styles/global.css`
- 手順書追加: `README.md`（`npm install`, `npm run dev`, `npm run build`, `npm run preview` を記載）
- UI証跡保存: `.flowsmith/ui-evidence/issue-11-frontend-base.png`
- 実行ログ保存: `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T014111Z-issue-11/coder_output_attempt_1.md`

実行した検証:
- `npm install` 成功
- `npm run build` 成功（`dist/` 生成）
- `git diff --check` 成功（問題なし）
- `rg -n "npm run dev|npm run build|npm install" README.md` で記載確認済み

