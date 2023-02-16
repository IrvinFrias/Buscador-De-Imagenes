import Photo from "../Photo/Photo";
import './FeedGalery.css';

const FeedGalery = ({photos}) =>{
    console.log({photos})
    return(
        <section className="col-10 mx-auto">
            <div className="d-flex flex-wrap justify-content-center galery mt-5">
                {
                    photos.map(photo =><Photo
                        key={photo.id}
                        img={photo.urls.regular}
                        html={photo.links.html}
                        description={photo.description}
                        author={photo.name}
                    />)
                }

            </div>

        </section>
    )
}
export default FeedGalery;
