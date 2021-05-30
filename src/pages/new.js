import Form from '../components/Form';

const NewMedicalProfile = () => {
  const medicalProfileForm = {
    name: '',
    owner_name: '',
    species: '',
    age: 0,
    poddy_trained: false,
    diet: [],
    image_url: '',
    likes: [],
    dislikes: [],
  };

  return <Form formId="add-pet-form" medicalProfileForm={medicalProfileForm} />;
};

export default NewMedicalProfile;
