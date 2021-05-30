import { useRouter } from 'next/router';
import useSWR from 'swr';
import Form from '../../components/Form';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditMedicalProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: medicalProfile, error } = useSWR(
    id ? `/api/medical-profile/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!medicalProfile) return <p>Loading...</p>;

  const medicalProfileForm = {
    name: medicalProfile.name,
    owner_name: medicalProfile.owner_name,
    species: medicalProfile.species,
    age: medicalProfile.age,
    poddy_trained: medicalProfile.poddy_trained,
    diet: medicalProfile.diet,
    image_url: medicalProfile.image_url,
    likes: medicalProfile.likes,
    dislikes: medicalProfile.dislikes,
  };

  return (
    <Form
      formId="edit-pet-form"
      medicalProfileForm={medicalProfileForm}
      forNewMedicalProfiles={false}
    />
  );
};

export default EditMedicalProfile;
