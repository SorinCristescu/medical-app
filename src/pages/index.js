import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import MedicalProfile from '../models/MedicalProfile';

const Index = ({ medicalProfiles }) => (
  <>
    {/* Create a card for each pet */}
    {medicalProfiles.map((medicalProfile) => (
      <div key={edicalProfile._id}>
        <div className="card">
          <img src={edicalProfile.image_url} />
          <h5 className="pet-name">{edicalProfile.name}</h5>
          <div className="main-content">
            <p className="pet-name">{edicalProfile.name}</p>
            <p className="owner">Owner: {edicalProfile.owner_name}</p>

            {/* Extra MedicalProfile Info: Likes and Dislikes */}
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
              <Link href="/[id]" as={`/${medicalProfile._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
);

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await MedicalProfile.find({});
  const medicalProfiles = result.map((doc) => {
    const medicalProfile = doc.toObject();
    medicalProfile._id = medicalProfile._id.toString();
    return medicalProfiles;
  });

  return { props: { medicalProfiles: medicalProfiles } };
}

export default Index;
