import Image from 'next/image';

import logo from '../../../assets/logo.svg';

import {Ranking} from './ranking';
import InviteLinkInput from './invite-link-input';
import { Stats } from './stats';


interface InvitepageProps {
    // para acessar id do usuario na rota
    // colcamos tudo dentro de uma pasta
    // com nome [subscriberId]
    params: Promise <{
        subscriberId: string
    }>
}

// forma mais simples de fazer 

// fetch('http://localhost:3333/subscriptions', {
//     method: 'POST',
//     body: JSON.stringify({
//       name: 'Diego',
//       email: ''
//     })
// })

// quando ta bem documentado da pra fazer o front
// saber todas as rotas do back com o orval

// usando o orval, ele cria um arquivo typescript
// com todas as rotas e paramentros, e etc da
// aplicação e tambem gera todas as funções
// pra fetch e as coisas necess. pra comun c backend


export default async function InvitePage(props: InvitepageProps){
    const {subscriberId} = await props.params;

    const inviteLink = `http://localhost:3333/invites/${subscriberId}`;


    return (
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[500px]">
                <Image src={logo} width={108.5} height={30} alt='devstage'/>

                <div className='space-y-2'>
                    <h1 className='text-4xl font-semibold font-heading text-gray-100 leading-none'>
                        Inscrição confirmada!
                    </h1>
                    <p className='text-gray-300'>
                        Para entrar no evento, acesse o link enviado para seu e-mail.
                    </p>
                </div>

                <div className='space-y-6'>
                    <div className='space-y-3'>
                        <h2 className='text-gray-200 text-xl font-heading font-semibold leading-none'>
                            Indique e ganhe
                        </h2>
                        <p>
                            Convide mais pessoas para o evento e concorra 
                            a prêmios exclusivos! 
                            É só compartilhar o link abaixo e
                             acompanhar as inscrições:
                        </p>
                    </div>

                    <InviteLinkInput inviteLink={inviteLink}/>

                    <Stats subscriberId={subscriberId}/>
                </div>
            </div>

            <Ranking/>
        </div>
    )
}