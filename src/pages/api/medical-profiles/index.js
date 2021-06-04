import dbConnect from '../../../utils/dbConnect';
import MedicalProfile from '../../../models/MedicalProfile';

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  switch (method) {
    case 'GET':
      try {
        const medicalProfiles = await MedicalProfile.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: medicalProfiles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const medicalProfile = await MedicalProfile.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: medicalProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
