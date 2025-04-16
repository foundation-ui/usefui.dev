/**
 * Calculates the size of a JSON payload in KB/MB
 * @param data - The data to measure (object, array, or JSON string)
 * @returns An object containing the size in bytes, KB, and MB, along with a formatted string
 */
export function CalculateJsonSize(data: unknown): {
  bytes: number;
  kilobytes: number;
  megabytes: number;
  formatted: string;
} {
  // Convert to JSON string if not already a string
  const jsonString =
    typeof data === "string" ? data : JSON.stringify(data, null, undefined);

  // Calculate size in bytes (2 bytes per character in UTF-16)
  const bytes = new TextEncoder().encode(jsonString).length;
  const kilobytes = bytes / 1024;
  const megabytes = kilobytes / 1024;

  // Format the result based on size
  let formatted: string;
  if (megabytes >= 1) {
    formatted = `${megabytes.toFixed(2)} MB`;
  } else if (kilobytes >= 1) {
    formatted = `${kilobytes.toFixed(2)} KB`;
  } else {
    formatted = `${bytes} bytes`;
  }

  return {
    bytes,
    kilobytes,
    megabytes,
    formatted,
  };
}
