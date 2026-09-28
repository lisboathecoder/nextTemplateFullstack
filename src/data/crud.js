import { HardDrive, KeyRound, Server, Layers3, PlusCircle } from "lucide-react";

export const examples = [
  {
    id: 1,
    method: "ApiKey",
    verb: "Get",
    description: "Lista series com api-key exposta.",
    color: "purple",
    Icon: KeyRound,
  },
  {
    id: 2,
    method: "SSR",
    verb: "Get",
    description: "Lista series renderizadas no SSR",
    color: "purple",
    Icon: Server,
  },
  {
    id: 3,
    method: "Offline",
    verb: "Get",
    description:
      "Lista series consumidas no SessionStorage, sem api-key exposta.",
    color: "purple",
    Icon: HardDrive,
  },
  {
    id: 4,
    method: "Fullstack",
    verb: "Get",
    description: "Lista séries via API Route - Backend Intermediário",
    color: "purple",
    Icon: Layers3,
  },
];

export const crud = [
  {
    id: 1,
    method: "Create",
    verb: "Post",
    description: "Cria série via modal e API Route.",
    color: "orange",
    Icon: PlusCircle,
  },
];
