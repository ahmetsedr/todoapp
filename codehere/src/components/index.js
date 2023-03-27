import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Section from './Section'


function Components() {



    const [contacts, setContacts] = useState([

        { todoName: "i will do working", todoActive: true },
        { todoName: "Başaramadık Abi ", todoActive: false },
        { todoName: "Artık olduğu kadar ", todoActive: false },
        { todoName: "Bu kadarıda güzel be ", todoActive: false },
        { todoName: "i will do playing", todoActive: true }])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    const [state, setState] = useState(contacts);



    return (
        <div>
            <div className='todoapp'>
                <Header addContacts={setContacts} contacts={contacts} />
                <Section
                    state={state}
                    setState={setState}
                    addContacts={setContacts}
                    contacts={contacts}

                />
            </div>
            <Footer />
        </div>
    )
}

export default Components
