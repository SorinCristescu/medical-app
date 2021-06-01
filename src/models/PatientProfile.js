import mongoose from 'mongoose';
// import geocoder from '../utils/geocoder';

/* PatientProfileSchema will correspond to a collection in your MongoDB database. */
const PatientProfileSchema = new mongoose.Schema({
  first_name: {
    /* The first name of this patient */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  last_name: {
    /* The last name of this patient */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  bio: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  description: {
    /* The description of patient */

    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  role: {
    type: [String],
    required: [true, 'Please specify your role.'],
  },
  age: {
    /* Patient's age, if applicable */

    type: Number,
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    address: {
      type: String,
    },
    streetNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    county: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  email: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  avatar_url: {
    /* Url to patient image */

    required: [true, 'Please provide an image url for this pet.'],
    type: String,
  },
  // services: {
  //   type: Array,
  // },
  good_to_know: {
    /* Things which are good to know about patient */

    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  medical_record: {
    allergies: {
      is_allergic: {
        type: Boolean,
        default: false,
      },
      types: [String],
    },
    chronic_diseases: {
      has_diseases: {
        type: Boolean,
        default: false,
      },
      types: [String],
    },
    infectious_diseases: {
      has_diseases: {
        type: Boolean,
        default: false,
      },
      types: [String],
    },
    diseases_under_treatment: {
      required_treatments: {
        type: [Object],
      },
    },
  },

  rating: {
    type: Array,
  },
  favorites: {
    type: Array,
  },
  medical_profiles: {
    type: Array,
  },
  payments: {
    incomes: {},
    outcomes: {},
  },
});

// // Geocode and create location field
// MedicalProfileSchema.pre('save', async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   this.location = {
//     type: 'Point',
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//     street: loc[0].streetName,
//     streetNumber: loc[0].streetNumber,
//     city: loc[0].city,
//     county: loc[0].stateCode,
//     zipCode: loc[0].zipCode,
//     country: loc[0].countryCode,
//   };

//   // Do not save address in DB
//   this.address = undefined;
//   next();
// });

export default mongoose.models.PatientProfile ||
  mongoose.model('PatientProfile', PatientProfileSchema);
