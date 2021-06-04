import { connectToDataBase } from '../../../utils/db';
import { hashPassword } from '../../../utils/auth';

async function handler(req, res) {
  const { method } = req;
  const client = await connectToDataBase();
  const db = client.db();

  if (method !== 'POST') {
    return;
  }

  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      success: false,
      message: 'Invalid input - password must be at least 6 characters long.',
    });
    client.close();
    return;
  }

  const existingUser = await db.collection('users').findOne({ email });
  if (existingUser) {
    res.status(422).json({
      success: false,
      message: 'User already exist!',
    });
    client.close();
    return;
  }
  const hashedPassword = await hashPassword(password);

  const user = {
    email,
    password: hashedPassword,
  };

  await db.collection('users').insertOne(user);

  res.status(201).json({
    success: true,
    message: `User ${email} created!`,
    data: user,
  });
  client.close();
}

export default handler;
