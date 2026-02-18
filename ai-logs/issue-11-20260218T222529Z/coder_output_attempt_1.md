フロントエンド基盤を最小構成で追加しました。`App -> pages -> components` の導線も作成済みです。

**変更内容**
- エントリポイント追加: `index.html`, `src/main.tsx`, `src/App.tsx`
- UI基盤ディレクトリ追加: `src/components`, `src/pages`, `src/styles`
- #9 着手用プレースホルダ追加: `src/components/RandomNumberPanel.tsx:1`
- 最小ページ追加: `src/pages/HomePage.tsx:1`
- スタイル追加: `src/styles/globals.css:1`
- Vite/TS設定追加: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`
- README追記: 開発・確認コマンドを記載 `README.md:1`

**実行結果**
- `git diff --check`: 成功（問題なし）
- `npm install`: 失敗（`EAI_AGAIN` / `registry.npmjs.org` 名前解決不可）
- `npm run build`: 未実行（依存未取得のため）

**依頼事項に対する補足**
- 指定ログファイル  
  `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260218T222529Z-issue-11/coder_output_attempt_1.md`  
  への書き込みはサンドボックス権限で不可でした。代替で `coder_output_attempt_1.md` をリポジトリ直下に作成しています。
- UI証跡画像も同じく指定パスへの保存権限とヘッドレスブラウザ実行クラッシュにより保存できませんでした。

**変更ファイル**
- `README.md`
- `index.html`
- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/pages/HomePage.tsx`
- `src/components/RandomNumberPanel.tsx`
- `src/styles/globals.css`
- `coder_output_attempt_1.md`