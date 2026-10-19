import { Button } from 'antd';
import Link from 'next/link';

export default function DeletePlaceHolder() {
    return (
        <main>
            <h2>Página que depende da seleção da série pelo usuário</h2>
            <p>Vá para o card Get - read e selecione a série desejada.</p>
            <Link href="/read">
                <Button type="primary">Ir para Get - Read</Button>
            </Link>
        </main>
    );
}
