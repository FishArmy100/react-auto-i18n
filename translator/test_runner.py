import subprocess
import json
import sys

SCRIPT = "translate.py"

args = {
    "src_lang": "eng_Latn",
    "langs": ["spa_Latn", "fra_Latn"],
    "segments": {
        "hello": "Hello world",
        "welcome": "Welcome {{name}}",
        "variants": [
            "Click {{button}} to continue",
            "Press {{$key}} to exit"
        ]
    }
}

cmd = [
    sys.executable,
    SCRIPT,
    json.dumps(args, ensure_ascii=False)
]

process = subprocess.Popen(
    cmd,
    stdout=subprocess.PIPE,
    stderr=subprocess.PIPE,
    text=True,
    encoding="utf-8"
)

print("Running translator...\n")

if process.stdout is None:
    raise RuntimeError("stdout pipe was not created")

if process.stderr is None:
    raise RuntimeError("stderr pipe was not created")

for line in process.stdout:
    try:
        msg = json.loads(line)

        if msg["type"] == "progress":
            print(f"[Progress] {msg['current']}/{msg['total']} -> {msg['lang']}")

        elif msg["type"] == "result":
            print("\n=== RESULT ===")
            print(json.dumps(msg["values"], indent=2, ensure_ascii=False))

        elif msg["type"] == "error":
            print("\nERROR:", msg["message"])

    except json.JSONDecodeError:
        print("RAW:", line)

process.wait()

if process.returncode != 0:
    print("\nProcess failed:")
    print(process.stderr.read())
else:
    print("\nFinished successfully.")