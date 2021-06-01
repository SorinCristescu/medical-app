import mongoose from 'mongoose';
// import geocoder from '../utils/geocoder';

/* MedicalProfileSchema will correspond to a collection in your MongoDB database. */
const MedicalProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  first_name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  last_name: {
    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  profesion_title: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  bio: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
    maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  role: {
    type: [String],
    required: [true, 'Please specify your role.'],
  },
  age: {
    type: Date,
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
    type: String,
  },
  malpraxis: {
    image_url: {
      required: [true, 'Please provide an image url for this pet.'],
      type: String,
    },
    valid_until: {
      type: Date,
      required: [true, 'Please provide an image url for this pet.'],
    },
  },
  certificate: {
    image_url: {
      type: String,
      required: [true, 'Please provide an image url for this pet.'],
    },
    valid_until: {
      type: Date,
      required: [true, 'Please provide an image url for this pet.'],
    },
  },
  experience: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      field_of_study: {
        type: String,
      },
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
      languages: {
        type: [String],
      },
    },
  ],
  services: {
    type: [
      {
        category: {
          type: String,
          required: [true, 'Please provide an image url for this pet.'],
        },
        name: {
          type: String,
          required: [true, 'Please provide an image url for this pet.'],
        },
        price: {
          type: Number,
          required: [true, 'Please provide an image url for this pet.'],
        },
      },
    ],
  },
  rating: {
    type: Array,
  },
  likes: {
    type: Array,
  },
  patients: {
    type: [Object],
  },
  payments: {
    incomes: [
      {
        amount: {
          type: Number,
        },
        patient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'patient',
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    outcomes: [
      {
        amount: {
          type: Number,
        },
        patient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'patient',
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
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

export default mongoose.models.MedicalProfile ||
  mongoose.model('MedicalProfile', MedicalProfileSchema);
