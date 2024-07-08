import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: '2077\'s EIP Wiki',
            logo: {
                light: './src/assets/full-logo-light.svg',
                dark: './src/assets/full-logo-dark.svg',
                replacesTitle: true,
            },
			social: {
				github: 'https://github.com/2077-Collective',
				discord: 'https://discord.gg/2077Collective',
			},
            customCss: [
                '@fontsource-variable/orbitron',
                './src/styles/global.css'
            ],
			sidebar: [
                {
                    label: 'Contributing',
                    items: [
                        {
                            label: 'Contribute to the EIPwiki',
                            link: '/eips/layer2/rip',
                        }
                    ]
                },
                {
                    label: 'Protocol',
                    items: [
                        {
                            label: 'Consensus layer (CL)',
                            link: '/eips/protocol/consensus',
                        },
                        {
                            label: 'Execution layer (EL)',
                            link: '/eips/protocol/execution',
                        },
                        {
                            label: 'Networking layer (NL)',
                            link: '/eips/protocol/networking',
                        },
                    ],
                },
                {
                    label: 'Applications',
                    items: [
                        {
                            label: 'Account abstraction',
                            link: '/eips/applications/aa',
                        },
                        {
                            label: 'Authentication & User security',
                            link: '/eips/applications/auth',
                        },
                        {
                            label: 'DAOs & Governance',
                            link: '/eips/applications/daos',
                        },
                        {
                            label: 'Defi',
                            link: '/eips/applications/defi',
                        },
                        {
                            label: 'Security',
                            link: '/eips/applications/security',
                        },
                        {
                            label: 'Token standards',
                            link: '/eips/applications/tokens',
                        },
                        {
                            label: 'General utilities for developers',
                            link: '/eips/applications/utils',
                        }
                    ]
                },
                {
                    label: 'Infrastructure',
                    items: [
                        {
                            label: 'Briges & Interoperability',
                            link: '/eips/infra/bridges',
                        },
                        {
                            label: 'JSON-RPC API spec',
                            link: '/eips/infra/json-rpc',
                        },
                        {
                            label: 'Client APIs',
                            link: '/eips/infra/client-apis',
                        },
                        {
                            label: 'Wallets',
                            link: '/eips/infra/wallets',
                        },
                        {
                            label: 'Node operator',
                            link: '/eips/infra/node-operator',
                        }
                    ]
                },
                {
                    label: 'Layer 2',
                    items: [
                        {
                            label: 'Rollup improvement proposals',
                            link: '/eips/layer2/rip',
                        }
                    ]
                },
			],
		}),
	],
});
