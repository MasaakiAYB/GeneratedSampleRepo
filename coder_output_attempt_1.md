実行ログ（要約）
- 既存構成を確認（実装コードなし）
- `app.py` を新規追加し、`GET /api/health` を `200` + JSON `{"status":"ok"}` で返す実装を追加
- 404 は最小実装として JSON `{"error":"not found"}` を返す実装を追加
- `README.md` を新規追加し、起動手順・curl確認コマンド・期待レスポンス・テスト実行手順を記載
- `tests/test_app.py` を新規追加し、`build_get_response` の 200/404 を `unittest` で検証
- `python -m unittest discover -s tests -p "test_*.py"` 実行: OK（2 tests）
- `git diff --check` 実行: 問題なし

変更ファイル要約
- `app.py`: 最小HTTPサーバーと `/api/health` 実装、CLI起動引数（--host/--port）
- `tests/test_app.py`: ヘルスチェックおよび未知パスの最小テスト
- `README.md`: ローカル起動手順と検証コマンド追記
