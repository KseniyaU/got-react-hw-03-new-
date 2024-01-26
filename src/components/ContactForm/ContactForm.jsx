// npm install formik
import { Formik, Form, Field } from 'formik';
import { useId } from 'react'
import css from '../ContactForm/ContactForm.module.css'

export const ContactForm = () => {
    const nameId = useId();
    const numberId = useId();

    return (
        <Formik
            initialValues={{
                username: '',
                usernumber: ''
            }}
            // onSubmit={(values)}
        >
            <Form className={css.containerForm}>
                <div className={ css.elemForm}>
                    <label htmlFor={ nameId}>Name</label> 
                    <Field type="text" name="username" id={ nameId}></Field>
                </div>
                <div className={ css.elemForm}>
                    <label htmlFor={ numberId}>Number</label>
                    <Field type="text" name="usernumber" id={ numberId}></Field>
                </div>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}