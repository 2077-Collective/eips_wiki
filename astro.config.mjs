import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
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
                            link: '/eips/applications/aa/',
                        },
                        {
                            label: 'Authentication & User security',
                            link: '/eips/applications/auth/',
                        },
                        {
                            label: 'DAOs & Governance',
                            link: '/eips/applications/daos/',
                        },
                        {
                            label: 'Defi',
                            link: '/eips/applications/defi/',
                        },
                        {
                            label: 'Security',
                            link: '/eips/applications/security/',
                        },
                        {
                            label: 'Token standards',
                            link: '/eips/applications/tokens/',
                        },
                        {
                            label: 'General utilities for developers',
                            link: '/eips/applications/utils/',
                        }
                    ]
                },
                {
                    label: 'Infrastructure',
                    items: [
                        {
                            label: 'Briges & Interoperability',
                            link: '/eips/infrastructure/bridges/',
                        },
                        {
                            label: 'JSON-RPC API spec',
                            link: '/eips/infrastructure/json-rpc/',
                        },
                        {
                            label: 'Client APIs',
                            link: '/eips/infrastructure/client-apis/',
                        },
                        {
                            label: 'Wallets',
                            link: '/eips/infrastructure/wallets/',
                        },
                        {
                            label: 'Node operator',
                            link: '/eips/infrastructure/node-operator/',
                        }
                    ]
                },
                {
                    label: 'Layer 2',
                    items: [
                        {
                            label: 'Rollup improvement proposals',
                            link: '/eips/layer2/rip/',
                        }
                    ]
                },
			],
		}),
	],
});
