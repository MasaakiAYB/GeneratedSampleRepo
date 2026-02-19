# Generated Sample Repo

フロントエンド実装基盤（Issue #11）として、Vite + React + TypeScript の最小構成を追加しています。

## 前提

- Node.js 20 系を推奨
- npm を使用

## セットアップ

```bash
npm install
```

## 開発サーバ起動

```bash
npm run dev
```

起動後、`http://localhost:5173` を開くと初期画面が表示されます。

## 品質確認

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

## ディレクトリ構成（最小）

```text
src/
  components/
    RandomNumberPanel.tsx
  pages/
    HomePage.tsx
  styles/
    global.css
  App.tsx
  main.tsx
```

## Issue #9 着手ポイント

- 画面レイアウト起点: `src/pages/HomePage.tsx`
- ランダム数値UI本体: `src/components/RandomNumberPanel.tsx`
- 必要なスタイル追加: `src/styles/global.css`
