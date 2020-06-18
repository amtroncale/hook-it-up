import React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Timeline from '../components/Timeline';

const Chirper = () => {
    const [chirps, setChirps] = React.useState([]);
    const addChirp = chirp => setChirps([...chirps, chirps]);

    return (
        <Layout>
            <div className="col-md-8">
                <Form addChirp={addChirp} />
            </div>
            <div className="col-md-10">
                <Timeline chirps={chirps} />
            </div>
        </Layout>
    )
};

export default Chirper;