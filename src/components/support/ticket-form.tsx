"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import {
  createTicket,
  getTickets,
  subscribeTickets,
  type TicketProblemType,
} from "@/lib/support-tickets";

const problemTypes: TicketProblemType[] = [
  "noWater",
  "lowOutput",
  "badTaste",
  "filterChange",
  "warranty",
];

const EMPTY_TICKETS: ReturnType<typeof getTickets> = [];

function getServerSnapshot() {
  return EMPTY_TICKETS;
}

export function TicketForm() {
  const t = useTranslations("support");
  const [problemType, setProblemType] = useState<TicketProblemType>("noWater");
  const [description, setDescription] = useState("");
  const tickets = useSyncExternalStore(
    subscribeTickets,
    getTickets,
    getServerSnapshot
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!description.trim()) return;
    createTicket(problemType, description.trim());
    setDescription("");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-[var(--color-foreground)]">
              {t("ticketForm.problemType")}
            </span>
            <select
              value={problemType}
              onChange={(event) =>
                setProblemType(event.target.value as TicketProblemType)
              }
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
            >
              {problemTypes.map((type) => (
                <option key={type} value={type}>
                  {t(`ticketForm.problems.${type}`)}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-[var(--color-foreground)]">
              {t("ticketForm.description")}
            </span>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder={t("ticketForm.descriptionPlaceholder")}
              className="resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-[var(--color-foreground)] outline-none focus:border-[var(--color-brand-400)]"
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-[var(--color-brand-500)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:brightness-90"
          >
            {t("ticketForm.submit")}
          </button>
        </form>
      </div>

      {tickets.length > 0 && (
        <div className="flex flex-col gap-2">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-start gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
            >
              <CheckCircle2
                size={16}
                className="mt-0.5 shrink-0 text-[var(--color-brand-600)]"
              />
              <div className="flex-1 text-sm">
                <p className="font-medium text-[var(--color-foreground)]">
                  {t(`ticketForm.problems.${ticket.problemType}`)} · #
                  {ticket.id}
                </p>
                <p className="text-[var(--color-muted)]">
                  {ticket.description}
                </p>
              </div>
              <span className="whitespace-nowrap text-xs text-[var(--color-muted)]">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
