Issue #11 向けに、最小構成のフロントエンド実装基盤を追加しました。

**実施内容**
- Vite + React + TypeScript の起動基盤を新規追加  
  `package.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- エントリポイント実装  
  `src/main.tsx`, `src/App.tsx`
- UI土台ディレクトリと雛形を追加  
  `src/pages/RandomNumberPage.tsx`, `src/components/RandomNumberPanel.tsx`, `src/styles/global.css`
- 品質確認手段を導入  
  `eslint.config.js` と `npm run lint` / `npm run build` scripts
- README を新規作成し、開発/検証コマンドと #9 の実装入口を明記  
  `README.md`
- 付随更新  
  `.gitignore` に `node_modules/`, `*.tsbuildinfo` を追加
- UI証跡を保存  
  `.flowsmith/ui-evidence/issue-11-frontend-base.png`
- 指定ログを記載  
  `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260219T000010Z-issue-11/coder_output_attempt_1.md`

**検証結果**
- `npm install`: 成功
- `npm run lint`: 成功
- `npm run build`: 成功
- `git diff --check`: 問題なし

必要なら次に、この状態から Issue #9 向けの実装（ランダム数値表示/更新）に進めます。