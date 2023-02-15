import './App.css';
import Nav from "./Components/Nav/Nav";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import FeedGalery from "./Components/FeedGalery/FeedGalery";

const App = () =>{
    const [photos, setPhotos] = useState([]);

    const getImages = async (values) => {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=10&query=${values.search}`, {
            headers: {
                'Authorization': 'Client-ID JKgcX6WBVbV7pqlqr7v5njtCZ-npKCvuONtVZhg9W_k'
            }
        })
        const data = await response.json()
        setPhotos(data.results);
    }
    return (
        <div>
            <header><Nav/></header>
            <section className="banner d-flex justify-content-center">
                <div className="col-6 m-2">
                    <Formik initialValues={{search: ''}} onSubmit={values => getImages(values)} >
                        <Form>
                            <Field placeholder="Find a image"  name="search"/>
                        </Form>

                    </Formik>
                </div>
            </section>

            {photos.length === 0 ? null : <FeedGalery photos={photos}/> }
        </div>
    )

}
export default App