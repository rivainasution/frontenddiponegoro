import { 
    Button,
    Col,
    Form, 
    Row
} from "react-bootstrap";
import {useFormik} from 'formik';
import * as Yup from 'yup';

function Upload(prop){
    const FILE_SIZE = 4000000000;
    const doUpload = (values) => {
        console.log('form values', values);
        setTimeout(() => {
            formik.setSubmitting(false);
            formik.resetForm();
        }, 2000);
    }
    const formik = useFormik({
        initialValues:{
            file: '',
            description: ''
        },
        validationSchema: Yup.object({
            file: Yup.mixed()
                .required("File is required")
                .test("fileSize", "File is to large, max: 4 MB", value => value && value.size <= FILE_SIZE),
            description: Yup.string()
                .required('Description is required')
                .min(8, 'Should more 8 characters')
        }),
        onSubmit: doUpload
    });


    return(
        <div className="mx-5">
            <h3 className="text-center">{prop.title}</h3>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group as={Row} controlId="formFile" className='mb-3'>
                    <Form.Label column sm="3">Upload File:</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="file"
                            name="file"
                            {...formik.getFieldProps('file')} 
                        />
                        {formik.touched.file && formik.errors.file && <div className="error text-danger">{formik.errors.file}</div>}
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formDescription" className='mb-3'>
                    <Form.Label column sm="3">Description</Form.Label>
                    <Col sm="9">
                        <Form.Control 
                            type="text" 
                            placeholder="Description"
                            {...formik.getFieldProps('description')}
                        />
                        {formik.touched.description && formik.errors.description && <div className="error text-danger">{formik.errors.description}</div>}
                    </Col>
                </Form.Group>

                <Button type="submit" disabled={formik.isSubmitting}>Upload</Button>
            </Form>
        </div>
    );
}

export default Upload;