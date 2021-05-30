import dbConnect from '../../../utils/dbConnect';
import PatientProfile from '../../../models/PatientProfile';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const patientProfile = await PatientProfile.findById(id);
        if (!medicalProfile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: patientProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const patientProfile = await PatientProfile.findByIdAndUpdate(
          id,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        );
        if (!medicalProfile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: patientProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedPatientProfile = await PatientProfile.deleteOne({
          _id: id,
        });
        if (!deletedPatientProfile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
