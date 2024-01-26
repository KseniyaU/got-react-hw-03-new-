import { Contact} from '../Contact/Contact'

export const ContactList = ({ allContacts }) => {
    // console.log(typeof(AllContacts));
    return (<div>
        <ul>
            {
                allContacts.map( value => (
                    <Contact key={value.id } contact={value} />
            )) }
        
        </ul>
    </div>
)}