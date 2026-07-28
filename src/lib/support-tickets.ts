export type TicketProblemType =
  | "noWater"
  | "lowOutput"
  | "badTaste"
  | "filterChange"
  | "warranty";

export type SupportTicket = {
  id: string;
  problemType: TicketProblemType;
  description: string;
  createdAt: string; // ISO datetime
};

const STORAGE_KEY = "eterna:support-tickets";

const listeners = new Set<() => void>();

export function subscribeTickets(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

let cachedRaw: string | null = null;
let cachedTickets: SupportTicket[] = [];

// useSyncExternalStore requires a referentially stable snapshot when the
// underlying value hasn't changed, so we cache the parsed result and only
// re-parse when the raw localStorage string actually differs.
export function getTickets(): SupportTicket[] {
  if (typeof window === "undefined") return cachedTickets;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedTickets;

  cachedRaw = raw;
  try {
    cachedTickets = raw ? (JSON.parse(raw) as SupportTicket[]) : [];
  } catch {
    cachedTickets = [];
  }
  return cachedTickets;
}

export function createTicket(
  problemType: TicketProblemType,
  description: string
): SupportTicket {
  const ticket: SupportTicket = {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    problemType,
    description,
    createdAt: new Date().toISOString(),
  };

  const tickets = [ticket, ...getTickets()];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets));
  cachedRaw = window.localStorage.getItem(STORAGE_KEY);
  cachedTickets = tickets;
  listeners.forEach((listener) => listener());

  return ticket;
}
