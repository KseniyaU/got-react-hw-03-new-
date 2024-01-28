// npm install formik
import { Formik, Form, Field, ErrorMessage } from 'formik';
//npm install yup
import * as Yup from "yup";
import { useId } from 'react';
import css from '../ContactForm/ContactForm.module.css'


export const ContactForm = ({onAdd}) => {
    const nameId = useId();
    const numberId = useId();
    const ID = useId();

    const userSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(3, 'Імʼя повинне містити не менше 3 символів!')
                .max(50, 'Імʼя повинне містити не більше 50 символів!')
                .required('Рядок є обовʼязковим до заповнення!'),
            number: Yup.string()
                .min(3, 'Номер повинен містити не менше 3 символів!')
                .max(50, 'Номер повинен містити не більше 50 символів!')
                .required('Рядок є обовʼязковим до заповнення!'),
        }
    )

    return (
        <Formik
            initialValues={{
                name: '',
                number: ''
            }}
            validationSchema={userSchema}
            onSubmit={(values, actions) => {
                console.log(values)
                actions.resetForm()
                onAdd({id:ID, ...values})
            }}

        >
            <Form className={css.containerForm}>
                <div className={ css.elemForm}>
                    <label htmlFor={ nameId}>Name</label> 
                    <Field type="text" name="name" id={nameId}></Field>
                    <ErrorMessage name="name" component="span" className={ css.error}/>
                </div>
                <div className={ css.elemForm}>
                    <label htmlFor={ numberId}>Number</label>
                    <Field type="text" name="number" id={numberId}></Field>
                    <ErrorMessage name="number" component="span" className={ css.error} />
                </div>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}