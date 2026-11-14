import { createFileRoute } from "@tanstack/react-router";
import assembly from "../../export/phone-group-call/assembly.json";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const call = assembly.call;
  const publisher = call.participants.find((p) => p.publisher);
  const listeners = call.participants.filter((p) => !p.publisher);

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-5 py-8">
      <h1 className="text-2xl font-semibold tracking-tight">Phone through a group call</h1>
      <p className="mt-2 text-sm text-zinc-400">
        The app is open on the phone. Telegram sees a join. The watch and the clerk are not Telegram fields.
      </p>

      <section className="mt-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Route</h2>
        <ol className="mt-3 space-y-2">
          {assembly.route.map((step, i) => (
            <li key={step} className="flex gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm">
              <span className="text-zinc-500">{i + 1}</span>
              <span>{step.replaceAll("_", " ")}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Call</h2>
        <p className="mt-3 text-sm">
          {call.tl_type} · {call.mode.replaceAll("_", " ")} · bit {assembly.clerk.bit} · {assembly.clerk.decision}
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          Publisher: {publisher?.phone_id ?? "none"}. Listeners join with video stopped:{" "}
          {listeners.map((p) => p.phone_id).join(", ") || "none"}.
        </p>
        <p className="mt-1 font-mono text-xs text-zinc-500">{call.methods.join(" · ")}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phones</h2>
        <ul className="mt-3 space-y-3">
          {assembly.phones.map((phone) => (
            <li key={phone.id} className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm">
              <div className="font-medium">
                {phone.id} · {phone.role}
              </div>
              <div className="mt-1 text-zinc-400">
                App opened: {phone.app_opened ? "yes" : "no"}. Watch held to phone:{" "}
                {phone.watch.held_to_phone ? "yes" : "no"}. Signal: {phone.incoming_call_signal}.
              </div>
              <div className="mt-1 text-zinc-500">
                Production {phone.privilege.production}. Injection {phone.privilege.injection}. Skills{" "}
                {phone.container.skills.length}.
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
