# GeneratedSampleRepo

フロントエンド実装の最小基盤を構築したリポジトリです。

## 前提環境

- Node.js 20 系（`.nvmrc` は `20`）

## セットアップ

```bash
npm install
```

依存関係をインストールします。

## 開発起動

```bash
npm run dev
```

Vite の開発サーバを起動し、ブラウザで画面を確認します。

## 品質確認（ビルド）

```bash
npm run build
```

ビルドが成功し、`dist/` が生成されることを確認します。

## ビルド成果物の確認（任意）

```bash
npm run preview
```

生成済み `dist/` をローカルで表示して確認します。

## ディレクトリ構成

```text
src/
  components/
  pages/
  styles/
```

- `src/pages/RandomNumberPage.jsx` と `src/components/RandomNumberPanel.jsx` は Issue #9 向けの雛形です。
