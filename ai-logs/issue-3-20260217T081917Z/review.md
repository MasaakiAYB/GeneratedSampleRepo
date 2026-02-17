**レビュー結果（重要順）**

### Medium
- `app.py:17`  
  `BaseHTTPRequestHandler` の `self.path` はクエリ文字列を含むため、`GET /api/health?x=1` が `404` になります。  
  `/api/health` 判定は `urllib.parse.urlparse(self.path).path` でクエリを除去して比較する方が安全です。

### Low
- `tests/test_app.py:8`  
  テストは `build_get_response` のユニットに限定され、`do_GET` の実HTTP応答（ステータス行・ヘッダー送信）までは検証していません。最小要件としては許容ですが、退行検知力は限定的です。

**確認結果**
- 要件充足: `GET /api/health` / `200` / `application/json` / `{"status":"ok"}` は満たしています。  
- `README.md` の起動・`curl` 手順追記も確認済みです。  
- `python -m unittest discover -s tests -p "test_*.py"` は `2 tests OK` でした。  
- 実行環境制約でソケット bind が禁止されており、手動 `curl` 疎通は未実施です。

**ファイル書き込みについて**
- 指定先 `.../review.md` への書き込みを試行しましたが、この環境は read-only のため `Permission denied` で保存できませんでした。  
- 必要なら、上記内容をそのまま `review.md` に貼り付けてください。