"use client";

import { useEffect, useState } from "react";

export default function Offline() {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const stored = sessionStorage.getItem("series");
    setSeries(stored ? JSON.parse(stored) : []);
  }, []);
  return (
    <main>
      <h2>GET - Offline</h2>
      <p>SessionStorage e nunca chama(fetch/axios) a API.</p>
      <ul>
        {series.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - {item.genero} -{" "}
            {item.ano_lancamento}
          </li>
        ))}
      </ul>
    </main>
  );
}
