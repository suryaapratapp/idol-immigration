type FormspreeError = {
  errors?: { message?: string }[];
};

export async function submitToFormspree(
  form: HTMLFormElement,
  endpoint: string
) {
  const response = await fetch(endpoint, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json"
    }
  });

  if (response.ok) {
    return;
  }

  const body = (await response.json().catch(() => ({}))) as FormspreeError;
  const message = body.errors
    ?.map((error) => error.message)
    .filter(Boolean)
    .join(" ");

  throw new Error(message || "We could not send your enquiry. Please try again.");
}
