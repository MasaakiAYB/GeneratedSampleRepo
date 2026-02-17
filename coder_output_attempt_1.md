# Coder Output (Attempt 1)

## 実行ログ（要約）
- 既存実装を確認し、`/api/health` を維持したまま `/` で UI を返す方針で実装。
- `index.html` を新規追加（タイトル・説明・アクションボタン・最小レスポンシブCSS・API呼び出しJS）。
- `app.py` で `GET /` 時に `index.html` を返す分岐を追加。
- `tests/test_health.py` に `/` の応答検証テストを追加。
- `README.md` に UI 起動/確認手順と画像参照を追記。
- 画像 `docs/images/ui-sample.png` を追加（実行環境制約によりブラウザ自動撮影不可のため、UIレイアウト確認用PNGを生成）。
- `git diff --check` 実行: 問題なし。
- `python3 -m unittest discover -s tests -p "test_*.py"` 実行: `OK`（2 tests）。

## 変更ファイル要約
- `index.html`（新規）: 最小構成UI（タイトル/説明/ボタン）とレスポンシブスタイルを追加。
- `app.py`: `/` で `index.html` を返す処理を追加。既存 `/api/health` は維持。
- `tests/test_health.py`: `/` の `200` / `Content-Type` / 主要文言を検証するテストを追加。
- `README.md`: UI確認URLと確認手順、画像参照を追記。
- `docs/images/ui-sample.png`（新規）: UI変更の見た目確認用画像を追加。
