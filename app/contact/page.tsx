"use client"

import React from 'react'
import { motion } from "framer-motion"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { info } from "@/data"

const formSchema = z.object({
    firstName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    service: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    })
})

export default function Contact() {

     // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            message: ""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <Form {...form}>
                            <form 
                                onSubmit={form.handleSubmit(onSubmit)} 
                                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            >
                                <h3 className='text-4xl text-accent'>
                                    Travaillons ensemble
                                </h3>
                                <p className='text-white/60'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Impedit, ullam.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Nom de famille" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Prenom" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Adresse Email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input placeholder="Numero de telephone" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* select */}
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="service"
                                        render={({ field }) => (
                                            <FormItem>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="selectionner le service" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="web">Developpement web</SelectItem>
                                                        <SelectItem value="mobile">Developpement mobile</SelectItem>
                                                        <SelectItem value="web-mobile">Developpement web et mobile</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                {/* textarea */}
                                <div>
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Votre message"
                                                        className="resize-none h-[200px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button 
                                    size="md" 
                                    type="submit"
                                    className="max-w-40"
                                >
                                    Envoyer
                                </Button>
                            </form>
                        </Form>
                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <li 
                                        key={index}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
>
                                            <div className="text-[28px]">{<Icon />}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
