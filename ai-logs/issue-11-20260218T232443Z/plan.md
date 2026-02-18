## 1. スコープ（対象/対象外）

### 対象
- フロントエンド実行基盤の新規追加（既存構成への影響を最小化するため `frontend/` 配下に閉じる）
- ブラウザ表示可能なエントリポイントの作成（Vite + React + TypeScript の最小構成）
- UI実装向けディレクトリの雛形作成（`components/`, `pages/`, `styles/`）
- 開発起動/確認コマンドの README 記載
- 最低限の品質確認手段として `build` チェックを実行可能化
- 後続 Issue #9 を着手しやすい最小の画面骨組み（例: `HomePage` + プレースホルダコンポーネント）を用意

### 対象外
- ランダム数値表示/更新などの業務機能実装（Issue #9 で対応）
- デザイン作り込み、状態管理導入、ルーティング本格導入
- バックエンド API の追加・改修

---

## 2. 実装手順（番号付き、各手順に完了条件付き）

1. 現状確認と配置方針の確定  
完了条件: 既存ファイル（主に `.github/**`）に影響しない方針として、追加先を `frontend/` に固定できている。

2. フロントエンド最小プロジェクトを作成  
実施内容: `frontend/package.json`, `index.html`, `vite.config.ts`, `tsconfig*.json`, `src/main.tsx`, `src/App.tsx` を作成。  
完了条件: `npm install` 後に `npm run dev` でローカル起動し、ブラウザで初期画面が表示される。

3. UI実装用ディレクトリ構成を定義  
実施内容: `frontend/src/components/`, `frontend/src/pages/`, `frontend/src/styles/` を作成し、最小ファイルを配置（例: `pages/HomePage.tsx`, `components/RandomNumberPanel.tsx`(プレースホルダ), `styles/global.css`）。  
完了条件: `main.tsx -> App.tsx -> HomePage` の描画経路が通り、後続が `components`/`pages` に機能追加できる状態になっている。

4. 開発・検証コマンドを README に追記  
実施内容: ルート `README.md`（無ければ新規）に Frontend セクションを追加し、以下を明記。  
- セットアップ: `cd frontend && npm install`  
- 開発起動: `npm run dev`  
- 品質確認: `npm run build`  
完了条件: README の記載だけで第三者が起動と確認を再現できる。

5. 最低限の品質確認を実施  
実施内容: `cd frontend && npm run build` を実行し、ビルド成功を確認。  
完了条件: ビルドが exit code 0 で完了し、受け入れ条件の「lint または build チェック」を満たす。

6. Issue #9 着手準備の確認  
実施内容: Issue #9 で実装予定の「表示」「更新」操作を追加しやすい配置（`components/RandomNumberPanel.tsx` など）を確認。  
完了条件: 後続担当が「どこに実装すべきか」を迷わず開始できる（README またはコードコメントで配置意図が明確）。

---

## 3. リスクと対策

- リスク: 技術スタック選定が重くなり、最小変更方針に反する  
対策: 依存は `vite`, `react`, `react-dom`, `typescript` など最小限に限定。ルーター/状態管理は導入しない。

- リスク: リポジトリ直下に多数ファイル追加して既存運用を汚す  
対策: すべて `frontend/` に閉じ、既存 `.github/**` には触れない。

- リスク: README が不足し、後続が起動手順で詰まる  
対策: 実行コマンドをコピペ可能な形で明記し、前提（Node/npm バージョン目安）も1行で補足。

- リスク: #9 の実装開始時に構成が不足  
対策: `pages`/`components` の雛形と命名を先に揃え、#9 で編集する想定ファイルを明示する。

---

## 4. 検証計画（実行コマンドと期待結果）

1. 依存インストール  
コマンド: `cd frontend && npm install`  
期待結果: エラーなく依存解決される。

2. 開発サーバー起動確認  
コマンド: `cd frontend && npm run dev`  
期待結果: Vite 開発サーバーが起動し、表示された URL をブラウザで開くと初期画面が表示される。

3. ビルド確認（品質チェック）  
コマンド: `cd frontend && npm run build`  
期待結果: ビルド成功（exit code 0）。`dist/` が生成される。

4. 受け入れ条件トレース  
コマンド: 目視確認（README とディレクトリ）  
期待結果:  
- エントリポイントあり（`frontend/index.html`, `frontend/src/main.tsx`）  
- `components/pages/styles` が存在  
- README に dev/build コマンド記載  
- build チェック可能  
- #9 着手用の骨組みファイルが存在