import { format } from "https://esm.sh/date-fns@4.1.0";

export function DatePipe(seconds: number): string {
  return format(new Date(seconds), "dd MMMM yyyy, HH:mm");
}
