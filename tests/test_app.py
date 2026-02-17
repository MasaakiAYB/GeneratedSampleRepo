import json
import unittest

from app import build_get_response


class AppTestCase(unittest.TestCase):
    def test_health_endpoint_returns_ok_json(self) -> None:
        status, headers, body = build_get_response("/api/health")
        self.assertEqual(status, 200)
        self.assertEqual(headers.get("Content-Type"), "application/json")
        self.assertEqual(json.loads(body.decode("utf-8")), {"status": "ok"})

    def test_unknown_path_returns_404(self) -> None:
        status, headers, body = build_get_response("/api/unknown")
        self.assertEqual(status, 404)
        self.assertEqual(headers.get("Content-Type"), "application/json")
        self.assertEqual(json.loads(body.decode("utf-8")), {"error": "not found"})


if __name__ == "__main__":
    unittest.main()
