import argparse
import json
from http.server import BaseHTTPRequestHandler, HTTPServer


def build_get_response(path: str) -> tuple[int, dict[str, str], bytes]:
    if path == "/api/health":
        body = json.dumps({"status": "ok"}, separators=(",", ":")).encode("utf-8")
        return 200, {"Content-Type": "application/json"}, body

    body = json.dumps({"error": "not found"}, separators=(",", ":")).encode("utf-8")
    return 404, {"Content-Type": "application/json"}, body


class HealthRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        status, headers, body = build_get_response(self.path)
        self.send_response(status)
        for key, value in headers.items():
            self.send_header(key, value)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args) -> None:  # noqa: A003
        return


def create_server(host: str = "127.0.0.1", port: int = 8000) -> HTTPServer:
    return HTTPServer((host, port), HealthRequestHandler)


def main() -> None:
    parser = argparse.ArgumentParser(description="Run the API server.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind.")
    parser.add_argument("--port", type=int, default=8000, help="Port to bind.")
    args = parser.parse_args()

    server = create_server(args.host, args.port)
    print(f"Serving on http://{args.host}:{args.port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
