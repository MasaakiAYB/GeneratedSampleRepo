実装を完了しました。Issue #3 の要件に合わせて最小構成で API を追加しています。

**変更内容**
- `app.py`
  - `GET /api/health` を追加
  - `200 OK` + JSON `{"status":"ok"}` を返却
  - 未知パスは `404`、非 `GET` 系メソッドは `405`
  - 依存追加なし（Python 標準ライブラリのみ）
- `tests/test_app.py`
  - 最小テストを追加（2件）
  - `/api/health` 正常系（200 + JSON）
  - 未知パスの 404
  - サンドボックス制約に対応するため、ネットワーク未使用のハンドラ単体テスト方式
- `README.md`
  - 起動手順
  - `curl -i http://localhost:8000/api/health` の確認コマンド
  - テスト実行コマンド

**検証結果**
- `python -m unittest discover -s tests -p "test_*.py"`: 成功（2 tests, OK）
- `git diff --check`: 成功（問題なし）
- `python app.py --host 127.0.0.1 --port 8000`: この実行環境では `PermissionError: [Errno 1] Operation not permitted`（ソケットバインド制約）で実施不可

**ログファイル**
- 指定先  
  `/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260217T062500Z-issue-3/coder_output_attempt_1.md`  
  への書き込みは権限エラーで失敗しました。
- 代替でリポジトリ直下に保存済み: `coder_output_attempt_1.md`