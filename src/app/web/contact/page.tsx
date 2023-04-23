import ButtonPrimary from '@/components/button/ButtonPrimary'
import React from 'react'

export default function ContactPage() {
    // throw new Error("Have error");
    
    return (
        <div>
            <div className={`font-montserrat`}>ContactPage</div>
            <ButtonPrimary title='Go to Home page' route='/' />
        </div>
    )
}
