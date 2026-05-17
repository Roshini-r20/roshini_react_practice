import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full justify-around gap-10`}>
            {clients.map((client)=> (
                <img key={client.id} src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
            ))}
        </div>
    </section>
  )
}

export default Clients