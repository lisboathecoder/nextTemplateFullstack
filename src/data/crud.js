import { HardDrive, KeyRound, Server } from "lucide-react";

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
];

export const crud = [
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
      "Lista series renderizadas no SessionStorage, sem api-key exposta.",
    color: "purple",
    Icon: HardDrive,
  },
];
