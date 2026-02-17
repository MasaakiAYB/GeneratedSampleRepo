あなたは Reviewer エージェントです。

この Issue の変更内容をレビューし、簡潔な品質レポートを作成してください。

Issue:
- プロジェクト: 
- 対象リポジトリ: MasaakiAYB/GeneratedSampleRepo
- 番号: #3
- タイトル: [agent] 簡単なAPIエンドポイントを追加する

計画:
## 1. スコープ（対象/対象外）

### 対象
- `GET /api/health` を返す最小 API の追加
- `200 OK` + `application/json` + `{"status":"ok"}` の実装
- ローカル起動手順と `curl` 確認コマンドを `README.md` に追記
- 可能な範囲で最小テスト追加（標準ライブラリベース）

### 対象外
- 認証、DB、設定管理、ロギング基盤などの機能拡張
- OpenAPI/Swagger 追加
- 不要な外部依存（フレームワーク導入）  
  - 現状リポジトリは実装コードが未配置に近いため、依存を増やさず `python` 標準ライブラリで完結させる前提

---

## 2. 実装手順（完了条件付き）

1. 現状構成の確認と実装方針確定  
完了条件: 既存コードがほぼ無いことを確認し、`app.py` + `tests/` + `README.md` を最小構成として採用

2. HTTP サーバー実装（`app.py`）  
完了条件: `GET /api/health` で `200` と `{"status":"ok"}` を JSON 返却できる  
- 推奨: `http.server`（`BaseHTTPRequestHandler`）で実装  
- `Content-Type: application/json` を明示  
- それ以外のパスは `404`（最小限）

3. 起動インターフェース整備  
完了条件: `python app.py` で `localhost:8000`（または明示ホスト/ポート）で起動できる  
- 任意引数 `--host`, `--port` を付与（運用しやすさ確保）

4. README 追記  
完了条件: 初見で再現可能な手順が `README.md` に記載されている  
- 起動コマンド  
- 確認コマンド（`curl -i http://localhost:8000/api/health`）  
- 期待レスポンス例（ステータス行 + JSON）

5. 最小テスト追加（`tests/test_app.py`）  
完了条件: 自動テストで `/api/health` 成功を検証できる  
- `unittest` で `200` とレスポンス JSON を確認  
- 余力があれば未知パス `404` も追加

6. ローカル検証と仕上げ  
完了条件: 手動確認とテストが通る状態で、実装内容と検証手順が一致

---

## 3. リスクと対策

- リスク: 既存アプリ基盤が無いため実装方式がぶれる  
対策: 依存追加禁止を優先し、標準ライブラリで閉じる（`http.server` + `unittest`）

- リスク: JSON/ヘッダー不整合（`Content-Type` やボディ形式）  
対策: `curl -i` でヘッダーとボディを明示確認、テストでも JSON 文字列を固定検証

- リスク: README と実装の乖離  
対策: 検証で実際に README 記載コマンドをそのまま実行して確認

---

## 4. 検証計画（実行コマンドと期待結果）

1. サーバー起動
```bash
python app.py
```
期待結果:
- エラーなく起動し、`8000` 番ポートで待受

2. ヘルスチェック確認
```bash
curl -i http://localhost:8000/api/health
```
期待結果:
- ステータス: `HTTP/1.0 200 OK` または `HTTP/1.1 200 OK`
- ヘッダー: `Content-Type: application/json`
- ボディ: `{"status":"ok"}`

3. （任意）未知パス確認
```bash
curl -i http://localhost:8000/api/unknown
```
期待結果:
- `404 Not Found`

4. テスト実行
```bash
python -m unittest discover -s tests -p "test_*.py"
```
期待結果:
- 追加したテストが全件 `OK` で終了

重点確認項目:
1. 正確性と挙動回帰
2. テスト不足
3. リスクの高い前提
4. フォローアップ作業

`/home/runner/work/FlowSmith/FlowSmith/.agent/runs/masaakiayb-generatedsamplerepo/20260217T081917Z-issue-3/review.md` に markdown でレビュー結果を書き込んでください。
