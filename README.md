# Generated Sample Repo

フロントエンド実装基盤（Issue #11）として、Vite + TypeScript の最小構成を用意しています。

## セットアップ

- Node.js 20 系を推奨
- 依存インストール:

```bash
npm install
```

## 開発起動

```bash
npm run dev
```

起動後、表示された URL（通常 `http://localhost:5173`）で最小画面を確認できます。

## 品質確認

```bash
npm run build
```

TypeScript 型チェック（`tsc --noEmit`）と本番ビルド（Vite）を実行します。

## ディレクトリ構成

- `src/pages`: 画面単位の実装（後続 Issue #9 の主な作業場所）
- `src/components`: 再利用可能な UI 部品
- `src/styles`: 共通スタイル
- `src/main.ts`: ブラウザエントリポイント
- `src/app.ts`: アプリルート組み立て
