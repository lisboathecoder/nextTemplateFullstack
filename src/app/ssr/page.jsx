import axios from "axios";
import SeriesList from "@components/SeriesList.jsx";

export default async function GetPage() {
  let series;
  try {
    const resp = await axios.get(`${process.env.API_URL_SERIES}?limit=50`, {
      headers: { "x-api-key": process.env.API_KEY },
    });
    series = resp.data.data;
  } catch (error) {
    console.error(error);
  }

  return (
    <main>
      <h2>Busca feito pelo servidor, com a api-key privada.</h2>
      <p>
        Devtools - Network: essa chamada nem aparece lá, pois acontece no
        servidor.
      </p>
      <p>Axios.get direto na api e SessionStorage, mas rodando no servidor.</p>
      <SeriesList series={series} />
    </main>
  );
}
