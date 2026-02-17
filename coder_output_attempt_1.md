# 実行ログ（attempt 1）
- 既存リポジトリは実装ファイルなし（`.github` と `.gitignore` のみ）
- `app.py` を追加し、`GET /api/health` で `200` + JSON `{"status":"ok"}` を返す最小サーバーを実装
- `tests/test_health.py` を追加し、`handle_get_request('/api/health')` の正常系テストを追加
- `README.md` を追加し、起動手順・確認コマンド・期待レスポンス・テスト手順を記載
- `python3 -m unittest discover -s tests -p "test_*.py"` は成功
- `git diff --check` は問題なし
- この実行環境ではソケット bind が禁止されており、`python3 app.py` による待受確認は `PermissionError: [Errno 1] Operation not permitted`

## 変更ファイル要約
- `app.py`: 最小 HTTP サーバーと `/api/health` 実装
- `tests/test_health.py`: `/api/health` 正常系の最小テスト
- `README.md`: 実行/検証手順の追記
