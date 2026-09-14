'use client';

import { Skeleton } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ApiKeyPage() {
    const [series, setSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscarSeries() {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_URL_SERIES}?limit=50`, {
                    headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
                });
                toast.success('Séries carregadas com sucesso.', { id: 'getApiKey' });
                const data = response.data;
                setSeries(
                    Array.isArray(data) ? data : data.data || [],
                );
            } catch (error) {
                toast.error('Erro ao buscar as séries.', { id: 'getApiKey' });
            } finally {
                setLoading(false);
            }
        }
        buscarSeries();
    }, []);

    return (
        <main>
            <h2>Veja api-key ficando exposta no header desta chamada</h2>
            <p>DevTools - Network - Headers - Series</p>
            <p> Axios.get direto na api-key exposta no navegador</p>
            {loading ? (
                <div className={'skeleton'}>
                    <Skeleton active />
                </div>
            ) : (
                <ul>
                    {series.map((item) => (
                        <li key={item.id}>
                            <strong>
                                {item.title}
                            </strong>{' '}
                            - {item.genero} -{' '}
                            {item.ano_lancamento}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    );
}
