import React from 'react';
import { Header } from './components/Header';
import { ButtonAcess } from './components/ButtonAcess';
import { MiddleContent } from './components/MiddleContent';
import { Main } from './components/template/Main';
import { Notification } from './components/Notification';
import { User } from './components/User';
import { LinkBox } from './components/LinkBox';
import { DropDownLinks } from './components/DropDownLinks'
import { Aside } from './components/template/Aside';

import './styles/global.scss';
import logoWithoutTitle from './assets/logo-without-title.svg';
import linkChain from './assets/chain.svg';
import instagramLogo from './assets/instagram.svg';

function App() {
	return (
		<>

      <MiddleContent />
			<Header srcLogo={logoWithoutTitle}>
				<div className="user-group">
					<Notification />
					<User />
				</div>
			</Header>
			<Main>
				<Aside>
					<DropDownLinks srcImg={linkChain} title="Links Úteis">
						<LinkBox links={[{
							title: "YouTube do projeto",
							url: "https://www.youtube.com/channel/UCRF-RiGEsHbWZDyohr7ZnEw"
						},
						{
							title: "Edital do ENEM",
							url: "https://www.in.gov.br/en/web/dou/-/edital-n-28-de-1-de-junho-de-2021-323746045"
						},
						{
							title: "Inep.gov",
							url: "https://www.gov.br/inep/pt-br"
						}
						]} />

					</DropDownLinks>

					<DropDownLinks srcImg={instagramLogo} title="Instagram">
						<LinkBox links={[{
							title: "Instagram",
							url: "https://www.instagram.com/turmadaarlene/"
						}]} />

					</DropDownLinks>
				</Aside>
			</Main>
		</>
	)
}

export default App;
