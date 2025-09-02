from huggingface_hub import InferenceClient
import sys
import json
import traceback
import re  # <-- added for regex

repo_id = "deepseek-ai/DeepSeek-R1"
llm_client = InferenceClient(
    model=repo_id,
    timeout=300,
    token="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"
)

def get_ai_reply(conversation):
    response = llm_client.chat_completion(
        messages=conversation,
        max_tokens=500,
        temperature=0.6,
        top_p=0.95,
        stream=False
    )

    sys.stderr.write(f"DEBUG: Response type: {type(response)}\n")
    sys.stderr.write(f"DEBUG: Response content: {response}\n")

    if hasattr(response, "choices") and response.choices:
        return response.choices[0].message["content"]

    if isinstance(response, str):
        return response

    return json.dumps(response, ensure_ascii=False)

def remove_think_tags(text):
    return re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL).strip()

if __name__ == "__main__":
    try:
        data = json.loads(sys.stdin.readline())
        conversation = data.get("conversation", [])
        reply = get_ai_reply(conversation)

        # Remove <think> reasoning before returning
        reply = remove_think_tags(reply)

        print(json.dumps({"reply": reply}), flush=True)
    except Exception as e:
        print(json.dumps({
            "error": str(e),
            "trace": traceback.format_exc()
        }), flush=True)
