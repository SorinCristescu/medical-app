import dbConnect from '../../../utils/dbConnect';
import PatientProfile from '../../../models/PatientProfile';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const patientProfiles = await PatientProfile.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: patientProfiles });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const patientProfile = await PatientProfile.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: patientProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
