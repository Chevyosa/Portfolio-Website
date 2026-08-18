import { Metadata } from "next";

import { ClientNavbar } from "@/components/web/client-navbar";
import { ChatPanel } from "@/components/web/chat-panel";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Virtual Assistant",
  description:
    "Ngobrol dengan asisten virtual Riyanda untuk tanya pengalaman, layanan, dan project.",
};

export default function AssistantPage() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-white text-zinc-900">
      <ClientNavbar />
      <main className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col px-6 py-6 sm:px-10">
        {/* <section className="mb-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Chat with AI
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
              Ngobrol sama Chevyosa.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
              Tanya apa aja soal pengalaman, layanan, atau project Riyanda.
              Chevyosa bakal jawab berdasarkan info yang ada.
            </p>
          </div>
          <Separator className="max-w-lg" />
        </section> */}
        <ChatPanel />
      </main>
    </div>
  );
}
