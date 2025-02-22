'use client'
import { ArrowRight, Copy, Mail, Radio, User } from 'lucide-react';
import { Button } from "@/components/button";
import { InputRoot, InputField, InputIcon } from '@/components/input';
import { useForm } from 'react-hook-form';

// biblio de validação de form
import { z } from 'zod';
// integração com a biblio de validação
import { zodResolver } from '@hookform/resolvers/zod';

// coloca como eu espero que o data esteja
const subscriptionSchema = z.object({
  // coloca oq espera e a msg de erro
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

// infere (det. auto) quala tipagem que vem do schema
type subscriptionSchema = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {

  // Biblioteca pra lidar com form
  // formstate pra capturar erro
  // coloca < { name: string email:string} > 
  // pra poder identificar auto os campos no errors
  const { register, handleSubmit , formState:{ errors }} = useForm 
    // <{ name: string,
    // email:string }>
    // passa só o tipo inferido acima
    <subscriptionSchema> 
  ({
    resolver: zodResolver(subscriptionSchema)
  });

  function onSubscribe (data : subscriptionSchema){ // API de form 
    console.log(data); 
  }


  {/*
    ao inves de action coloca onSubmit
    e coloca a função que valida dentro do handle submit
  */}
  return (
    <form onSubmit={handleSubmit(onSubscribe)} className='bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]'>
      <h2 className='font-heading font-semibold text-gray-200 text-xl'>
        Inscrição
      </h2>

      <div className='space-y-3'>
        <div className='space-y-2'>
          <InputRoot>
            <InputIcon>
              <User/>
            </InputIcon>
          
            <InputField 
              type='text' 
              placeholder='Nome completo'
              // register para colocar o que seria o name
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className='text-danger text-xs font-semibold'>{errors.name.message}</p>
          )}
        </div>
        
        <div className='space-y-2'>
          <InputRoot>
            <InputIcon>
              <Mail/>
            </InputIcon>
          
            <InputField 
              type='email' 
              placeholder='E-mail'
              {...register('email')}
            />
          </InputRoot>

          {errors.email && (
            <p className='text-danger text-xs font-semibold'>{errors.email.message}</p>
          )}
        </div>
        
      </div>

      <Button type='submit'>
        Confirmar 
        <ArrowRight/>
      </Button>
    </form>
  )
  
}