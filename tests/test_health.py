import unittest

from app import handle_get_request


class HealthEndpointTests(unittest.TestCase):
    def test_get_health_returns_ok_json(self):
        status, headers, body = handle_get_request("/api/health")
        self.assertEqual(status, 200)
        self.assertEqual(headers.get("Content-Type"), "application/json")
        self.assertEqual(body.decode("utf-8"), '{"status":"ok"}')


if __name__ == "__main__":
    unittest.main()
