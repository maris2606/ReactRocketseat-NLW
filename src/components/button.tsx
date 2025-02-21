import { ComponentProps, ReactNode } from "react";

/* como é typescript tem que colocar tipo na interface */
// ? = opcional

// se colocar extends, ele extende todos os atributos
// da tag, podendo passar atributos direto 
// onde ele é chamado, sem ficar tipando aqui
interface ButtonProps extends ComponentProps<'button'>{}

export function Button (props : ButtonProps) {
  return (
    <button 
        className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        {...props} 
        // coloca oq foi passado da tag q chama aqui
        // o {props.children} vem junto
        // nn precisa colocar ele na interface
    />
  )
}

