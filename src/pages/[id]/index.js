import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dbConnect from '../../utils/dbConnect';
import MedicalProfile from '../../models/MedicalProfile';

/* Allows you to view pet card info and delete pet card*/
const MedicalProfilesPage = ({ pet }) => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const handleDelete = async () => {
    const medicalProfileID = router.query.id;

    try {
      await fetch(`/api/medical-profile/${medicalProfileID}`, {
        method: 'Delete',
      });
      router.push('/');
    } catch (error) {
      setMessage('Failed to delete the medical profile.');
    }
  };

  return (
    <div key={medicalProfile._id}>
      <div className="card">
        <img src={medicalProfile.image_url} />
        <h5 className="pet-name">{medicalProfile.name}</h5>
        <div className="main-content">
          <p className="pet-name">{medicalProfile.name}</p>
          <p className="owner">Owner: {medicalProfile.owner_name}</p>

          {/* Extra Pet Info: Likes and Dislikes */}
          <div className="likes info">
            <p className="label">Likes</p>
            <ul>
              {medicalProfile.likes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className="dislikes info">
            <p className="label">Dislikes</p>
            <ul>
              {medicalProfile.dislikes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>

          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${medicalProfile._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const medicalProfile = await MedicalProfile.findById(params.id).lean();
  medicalProfile._id = medicalProfile._id.toString();

  return { props: { medicalProfile } };
}

export default MedicalProfilesPage;
