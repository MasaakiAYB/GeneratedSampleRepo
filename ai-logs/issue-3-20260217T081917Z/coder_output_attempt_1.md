実装を完了しました。Issue #3 のスコープに沿って最小構成で API を追加しています。

変更内容
- `app.py`
  - `GET /api/health` を追加
  - `200 OK` + `application/json` + `{"status":"ok"}` を返却
  - 最小の 404 応答（JSON）を実装
  - `python app.py --host ... --port ...` で起動可能
- `tests/test_app.py`
  - 最小テストを追加（`/api/health` の 200/JSON、未知パスの 404）
- `README.md`
  - 起動手順、`curl` 確認コマンド、期待レスポンス、テスト実行コマンドを追記

検証結果
- `python -m unittest discover -s tests -p "test_*.py"`: `OK`（2 tests）
- `git diff --check`: 問題なし

補足
- この実行環境はソケット作成が制限されているため、ここでは `curl` の実通信検証は実行できませんでした（テストはネットワーク非依存で検証）。
- 指定の出力先 `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260217T081917Z-issue-3/coder_output_attempt_1.md` は権限上書き込み不可だったため、代替で `coder_output_attempt_1.md` をリポジトリ直下に作成しています。