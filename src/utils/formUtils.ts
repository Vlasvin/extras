import { FieldErrors } from "react-hook-form";

export const getErrorMessage = (
  errors: FieldErrors,
  path: string
): string | undefined => {
  const keys = path.split(".");
  let error: any = errors;

  for (const key of keys) {
    if (!error[key]) {
      return undefined;
    }
    error = error[key];
  }

  return error?.message ? String(error.message) : undefined;
};
