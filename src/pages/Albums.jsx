import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Albums = () => {
    const [albums, setAlbums] = React.useState([]);

    React.useEffect(() => {
        async function getAlbums() {
            const res = await fetch('https://student-fun-api.herokuapp.com/api/hiphop/');
            const albums = await res.json();
            setAlbums(albums);
        }

        getAlbums();
    }, []);

    return (
        <Layout>
            <h1 className="col-12 text-center">Luke's Top 5 Hip Albums</h1>
            <div className="col-8">
                <ul className="list-group list-goup-flush">
                    {albums.map((album) => (
                        <li
                            key={album.id}
                            className="list-group-item d-flex justify-content-between align-items-center py-4">
                            {album.title}
                            <Link className="btn btn-link" to={`/albums/${album.id}`}>
                                Details
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
};

export default Albums;