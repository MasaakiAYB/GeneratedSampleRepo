# GeneratedSampleRepo

最小構成の API サンプルです。`GET /api/health` を提供します。

## 前提

- Python 3.8 以上

## 起動手順

```bash
python app.py
```

デフォルトで `0.0.0.0:8000` で待ち受けます。必要に応じて以下で変更できます。

```bash
python app.py --host 127.0.0.1 --port 8000
```

停止する場合は `Ctrl + C` を押してください。

## 疎通確認

```bash
curl -i http://localhost:8000/api/health
```

期待されるレスポンス例:

```http
HTTP/1.0 200 OK
Content-Type: application/json

{"status":"ok"}
```

## テスト実行

```bash
python -m unittest discover -s tests -p "test_*.py"
```
