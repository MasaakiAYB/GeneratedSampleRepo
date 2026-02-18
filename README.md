# generated-sample-repo

フロントエンド UI 実装のための最小基盤です。Issue #9 の実装を開始できる状態までを対象に整備しています。

## 前提

- Node.js 20 以上
- npm 10 以上

## セットアップ

```bash
npm install
```

## 開発サーバ起動

```bash
npm run dev
```

起動後に表示される URL（`http://127.0.0.1:5173`）をブラウザで開くと、プレースホルダー画面を確認できます。

## 品質確認

```bash
npm run lint
npm run build
```

`lint` は `src/` 配下 JavaScript の構文チェック、`build` は `dist/` への成果物出力を行います。

## ディレクトリ構成

```text
src/
  components/  # 再利用 UI コンポーネント
  pages/       # 画面単位コンポーネント
  styles/      # スタイル
  main.js      # フロントエンドエントリポイント
scripts/
  dev-server.mjs  # 開発用静的サーバ
  build.mjs       # 最小ビルド処理（dist生成）
```

## #9 着手ポイント

- `src/pages/HomePage.js` に #9 の画面骨組み（見出し / 数値表示領域 / 更新操作領域）を用意済み
- `src/components/NumberDisplayPlaceholder.js` を実データ表示に置き換え
- `src/components/UpdateControlsPlaceholder.js` に更新イベント処理を追加
