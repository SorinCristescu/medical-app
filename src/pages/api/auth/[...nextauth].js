import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../utils/auth';
import { connectToDataBase } from '../../../utils/db';

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days to be modify accordingly
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDataBase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Password is not valid!');
        }

        client.close();

        return {
          email: user.email,
        };
      },
    }),
  ],
});
