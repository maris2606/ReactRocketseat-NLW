'use client'
/* 
    precisa disso pra poder usar oq tem interação com o cliente
    pq no padrão o node só manda html estático , sem  js
    ent precisa disso pra ele mandar o js
    e alcançar o evento do cliente.

    só esse componente precisa de interação,
    se for uma pag toda, não pode.
    o ideal é separar por parte, 
    senão carrega tudo e fica lento
*/

import { InputField, InputIcon, InputRoot } from '@/components/input';
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react';
import { IconButton } from '@/components/icon-button';

interface InviteLinkInputProps{
    inviteLink:string
}


export default function InviteLinkInput({inviteLink}: InviteLinkInputProps){
    function copyInviteLink () {
        navigator.clipboard.writeText(inviteLink)
    }
    
    return (
        <InputRoot>
            <InputIcon>
                <Link className='size-5'/>
            </InputIcon>

            <InputField readOnly defaultValue={inviteLink}/>
        
            {/* com o - antes de mr-2, 
            o elem se mov com relação a pos atual,
            nn ao objeto q ele ta */}
            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5'/>
            </IconButton>
        </InputRoot>
    )
}