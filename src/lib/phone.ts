// Validates Indian 10-digit mobile numbers and rejects obviously fake ones.
// Returns an error message, or null if the number looks real.
export function validatePhone(input: string): string | null {
  const phone = input.replace(/\D/g, "");

  if (phone.length !== 10) return "Please enter a valid 10-digit phone number.";
  if (!/^[6-9]/.test(phone)) return "Phone number must start with 6, 7, 8 or 9.";

  const counts: Record<string, number> = {};
  for (const d of phone) counts[d] = (counts[d] || 0) + 1;

  // 9999999999, 9000000000, 9898989898, 9988776655-style junk
  if (Object.keys(counts).length < 4) return "Please enter your real phone number.";
  // Too many repeats of one digit, e.g. 9800000000, 9111111115
  if (Math.max(...Object.values(counts)) >= 6) return "Please enter your real phone number.";
  // A run of 5+ identical digits in a row, e.g. 9811111234
  if (/(\d)\1{4,}/.test(phone)) return "Please enter your real phone number.";

  // Sequential runs of 6+ digits (ascending or descending), e.g. 9123456789, 9876543210
  let asc = 1;
  let desc = 1;
  for (let i = 1; i < phone.length; i++) {
    const diff = Number(phone[i]) - Number(phone[i - 1]);
    asc = diff === 1 ? asc + 1 : 1;
    desc = diff === -1 ? desc + 1 : 1;
    if (asc >= 6 || desc >= 6) return "Please enter your real phone number.";
  }

  return null;
}
