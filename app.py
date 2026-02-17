import argparse
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


class HealthRequestHandler(BaseHTTPRequestHandler):
    def _write_json(self, status_code: int, payload: dict) -> None:
        body = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        if self.path == "/api/health":
            self._write_json(200, {"status": "ok"})
            return

        self._write_json(404, {"error": "not_found"})

    def do_POST(self) -> None:
        self._write_json(405, {"error": "method_not_allowed"})

    def do_PUT(self) -> None:
        self._write_json(405, {"error": "method_not_allowed"})

    def do_DELETE(self) -> None:
        self._write_json(405, {"error": "method_not_allowed"})

    def do_PATCH(self) -> None:
        self._write_json(405, {"error": "method_not_allowed"})

    def do_HEAD(self) -> None:
        if self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", "0")
            self.end_headers()
            return

        self.send_response(404)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def log_message(self, format: str, *args) -> None:
        return


def run_server(host: str, port: int) -> None:
    server = ThreadingHTTPServer((host, port), HealthRequestHandler)
    print(f"Serving on http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Minimal health-check API server")
    parser.add_argument("--host", default="0.0.0.0", help="Host to bind")
    parser.add_argument("--port", default=8000, type=int, help="Port to bind")
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    run_server(args.host, args.port)
