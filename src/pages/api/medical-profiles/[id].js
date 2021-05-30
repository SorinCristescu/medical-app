import dbConnect from '../../../utils/dbConnect';
import MedicalProfile from '../../../models/MedicalProfile';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const medicalProfile = await MedicalProfile.findById(id);
        if (!medicalProfile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: medicalProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const medicalProfile = await MedicalProfile.findByIdAndUpdate(
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
        res.status(200).json({ success: true, data: medicalProfile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedMedicalProfile = await MedicalProfile.deleteOne({
          _id: id,
        });
        if (!deletedMedicalProfile) {
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
