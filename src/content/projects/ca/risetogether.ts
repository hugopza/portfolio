import type { ProjectContent } from "../../types";

export default {
  title: "RiseTogether",
  theme: "dark",
  tags: ["expo", "react", "typescript", "supabase", "kotlin"],
  description: "Una alarma social que combina un timbre natiu fiable a Android amb comprovacions de grup en temps real.<br/><br/>El producte fa que llevar-se sigui més difícil d'ignorar connectant l'alarma nativa, la pantalla bloquejada i la responsabilitat social.",
  components: [
    { type: "text", props: { title: "El repte", text: "Les restriccions modernes d'Android compliquen l'execució fiable d'alarmes. L'app també ha de coordinar intents natius, navegació JavaScript i estat de grup en temps real sense duplicar fluxos." } },
    { type: "list", props: { title: "Què he construït", items: ["AlarmManager, BroadcastReceiver, servei en primer pla i interfície d'alarma a pantalla completa", "Comprovacions de grup i progrés en temps real amb Supabase", "Ajornament natiu limitat estrictament a dues vegades", "Gestió d'inici en fred i intents singleTask durant tot el cicle de vida"], size: "md" } },
  ],
} as const satisfies ProjectContent;
