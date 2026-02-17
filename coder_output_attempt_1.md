# 実行ログ（attempt 1）

- 追加: `app.py`（標準ライブラリのみの HTTP サーバー、`GET /api/health` 実装）
- 追加: `tests/test_app.py`（ネットワーク未使用の最小単体テスト 2 件）
- 追加: `README.md`（起動手順、`curl` 確認、テスト手順）

## 実行コマンドと結果

1. `python -m unittest discover -s tests -p "test_*.py"`
- 結果: `OK`（2 tests）

2. `git diff --check`
- 結果: 問題なし（出力なし）

3. `python app.py --host 127.0.0.1 --port 8000`
- 結果: 失敗（サンドボックス制約により `PermissionError: [Errno 1] Operation not permitted`）
- 補足: この環境ではソケットバインド不可のため `curl` 実疎通は未実施

## 変更ファイル要約

- `app.py`: `/api/health` で `200` + `{"status":"ok"}` を返却。未知パスは `404`、非GET系は `405`。
- `tests/test_app.py`: 生HTTPリクエストをハンドラへ渡す方式で、正常系と404系を検証。
- `README.md`: 実行方法・確認コマンド・テスト実行方法を記載。
