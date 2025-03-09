
// import { useRouter } from 'next/router';
import { TieredMenu } from 'primereact/tieredmenu';
import React from 'react';

export default function RouterDemo() {
    // const router = useRouter();
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            // command: () => {
            //     router.push('/installation');
            // }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        