# GeneratedSampleRepo

## 起動手順

```bash
python app.py
```

デフォルトで `127.0.0.1:8000` で起動します（`localhost:8000` からアクセス可能）。

必要に応じてバインド先を指定できます。

```bash
python app.py --host 0.0.0.0 --port 8000
```

## 動作確認

```bash
curl -i http://localhost:8000/api/health
```

期待されるレスポンス例:

```http
HTTP/1.0 200 OK
Content-Type: application/json

{"status":"ok"}
```

## テスト

```bash
python -m unittest discover -s tests -p "test_*.py"
```
