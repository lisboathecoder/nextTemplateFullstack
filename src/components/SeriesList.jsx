'use client'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function SeriesList({ series }) {
    useEffect(() => {
        sessionStorage.setItem('series', JSON.stringify(series));
        toast.success('Séries buscadas via SSR e salvas no sessionStorage!', { id: 'ssr' });
    }, [series])
    return (
        <ul>
            {series.map((item) => (
                <li key={item.id}>
                    <strong>{item.title}</strong> - {item.genero} - {item.ano_lancamento}
                </li>
            ))}
        </ul>
    );
};
