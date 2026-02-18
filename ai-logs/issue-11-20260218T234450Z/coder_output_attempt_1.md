Issue #11 のスコープに合わせて、最小構成のフロントエンド基盤を追加しました。

**実施内容**
- ブラウザエントリポイント追加: `index.html`, `src/main.ts`
- アプリ導線追加: `src/app.ts` → `src/pages/HomePage.ts` → `src/components/StatusCard.ts`
- UI実装用ディレクトリ定義: `src/components`, `src/pages`, `src/styles`
- 最小スタイル追加: `src/styles/global.css`
- 実行基盤追加: `package.json`, `tsconfig.json`, `vite.config.ts`, `package-lock.json`
- README追記: `README.md`（セットアップ/開発起動/品質確認/ディレクトリ役割）
- Node除外設定追加: `.gitignore`（`node_modules/`）

**検証結果**
- `npm install`: 成功
- `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort`: 起動確認（`http://127.0.0.1:4173/`）
- `npm run build`: 成功
- `git diff --check`: 問題なし

**UI証跡**
- `.flowsmith/ui-evidence/issue-11-frontend-base.png`

**指定ログ出力**
- `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260218T234450Z-issue-11/coder_output_attempt_1.md`

次に必要なら、そのまま Issue #9 向けの画面実装を `src/pages/HomePage.ts` と `src/components` に追加できます。