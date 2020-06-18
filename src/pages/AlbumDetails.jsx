import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Layout from '../components/Layout';

const AlbumDetails = () => {
    const { albumid } = useParams();
    const history = useHistory();

    const [album, setAlbum] = React.useState({});

    React.useEffect(() => {
        fetch(`https://student-fun-api.herokuapp.com/api/hiphop/${albumid}`)
            .then((res) => res.json())
            .then((album) => setAlbum(album));
    }, [albumid]);

    return (
        <Layout>
            <div className="col-12">
                <div className="d-flex justify-contnet-around">
                    <img src={album.image} alt="album art" />
                    <div className="d-flex flex-column align-items-center justify-content-cemter">
                        <h1>{album.title}</h1>
                        <h2>by {album.artist}</h2>
                        <a 
                            className="btn btn-outline-dark mt-3 shadow-md"
                            rel="noopener noreferrer"
                            href={album.url}
                            target="_blank">
                            Amazon
                        </a>
                        <button onClick={() => history.goBack()} className="btn btn-secondary mt-5">
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default AlbumDetails;