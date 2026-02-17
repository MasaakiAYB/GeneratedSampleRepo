#!/usr/bin/env python3
import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


class HealthHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        status, headers, body = handle_get_request(self.path)
        self.send_response(status)
        for key, value in headers.items():
            self.send_header(key, value)
        self.end_headers()
        if body:
            self.wfile.write(body)

    def log_message(self, format, *args):
        return


def run_server():
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), HealthHandler)
    print(f"Listening on http://{host}:{port}")
    server.serve_forever()


def handle_get_request(path):
    if path != "/api/health":
        return 404, {}, b""

    body = json.dumps({"status": "ok"}, separators=(",", ":")).encode("utf-8")
    headers = {
        "Content-Type": "application/json",
        "Content-Length": str(len(body)),
    }
    return 200, headers, body


if __name__ == "__main__":
    run_server()
