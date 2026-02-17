import io
import unittest
from unittest.mock import Mock

from app import HealthRequestHandler


class _DummySocket:
    def __init__(self, request_bytes: bytes) -> None:
        self._rfile = io.BytesIO(request_bytes)
        self._response = io.BytesIO()

    def makefile(self, mode: str, buffering: int | None = None):  # noqa: ARG002
        if "r" in mode:
            return self._rfile
        return self._response

    def sendall(self, data: bytes) -> None:
        self._response.write(data)

    def close(self) -> None:
        return

    @property
    def response(self) -> bytes:
        return self._response.getvalue()


def _handle_raw_request(raw_request: bytes) -> bytes:
    socket = _DummySocket(raw_request)
    HealthRequestHandler(socket, ("127.0.0.1", 12345), Mock())
    return socket.response


class HealthApiTest(unittest.TestCase):
    def test_health_endpoint_returns_ok_json(self) -> None:
        response = _handle_raw_request(
            b"GET /api/health HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n"
        )
        header, body = response.split(b"\r\n\r\n", maxsplit=1)
        self.assertIn(b"HTTP/1.0 200 OK", header)
        self.assertIn(b"Content-Type: application/json", header)
        self.assertEqual(body, b'{"status":"ok"}')

    def test_unknown_path_returns_not_found(self) -> None:
        response = _handle_raw_request(
            b"GET /api/unknown HTTP/1.1\r\nHost: localhost\r\nConnection: close\r\n\r\n"
        )
        header, _ = response.split(b"\r\n\r\n", maxsplit=1)
        self.assertIn(b"HTTP/1.0 404 Not Found", header)


if __name__ == "__main__":
    unittest.main()
