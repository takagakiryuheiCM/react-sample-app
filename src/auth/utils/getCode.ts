export function getCode(): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get("code");
  }