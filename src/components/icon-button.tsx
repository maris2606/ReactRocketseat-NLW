import { ComponentProps, ReactNode } from "react";

/* como é typescript tem que colocar tipo na interface */
// ? = opcional
interface IconButtonProps extends ComponentProps<'button'>{}

export function IconButton (props : IconButtonProps) {
  return (
    <button 
        className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        {...props}
    />
  )
}

