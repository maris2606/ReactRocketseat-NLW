import { ComponentProps, ReactNode } from "react";
import { Mail } from 'lucide-react';

/* como é typescript tem que colocar tipo na interface */
// ? = opcional
// interface InputProps extends ComponentProps<'input'>{
    
// }

// export function Input ({error=false, ...props} : InputProps) {
//   return (
//     /* group deixa aplicar estilo num elemen dentro do 
//     grupo, dependendo do estado do grupo */
//     <div 
//         // data atributes
//         data-error={error}
//         className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
//     >
//         <span 
//         /* no css tem estilo input:placeholder-shown, p qd nn aparecer teria q colocar um not */
//         /* com [] pode colocar o css que quiser dentro */
//         /*  
//             se o grupo (& referencia ele msm) nao tem input com placeholder aparecendo, muda a cor pra ...
//             group-[&:not(:has(input:placeholder-shown))]:text-gray-100
//         */
//             className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
//         >
//             <Mail/>
//         </span>

//         <input 
//             className="flex-1 outline-0 placeholder-gray-400"
//             {...props}
//         />
//     </div>
//   )
// }

// composition pattern pra quando um componenente tem
// varios componentes
interface InputRootProps extends ComponentProps<'div'>{
    error?:boolean
}

export function InputRoot({error=false, ...props}:InputRootProps) {
    return (
        <div 
        data-error={error}
        className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
        {...props}
        />
    )
}

interface InputIconProps extends ComponentProps<'span'>{}

export function InputIcon(props:InputIconProps) {
    return (
        <span 
            className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
            {...props}
        />
    )
}


interface InputFieldProps extends ComponentProps<'input'>{}

export function InputField(props:InputFieldProps) {
    return (
        <input 
            className="flex-1 outline-0 placeholder-gray-400"
            {...props}
        />
    )
}

