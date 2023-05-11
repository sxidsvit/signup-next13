import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {

  const { data: { firstName, lastName, username, email, password } } = await request.json();

  try {
    await connectToDB();

    const newUser = new User({ firstName, lastName, username, email, password });

    const result = await newUser.save();
    console.log('result: ', result);

    return new Response(JSON.stringify(result), { status: 201 })
  } catch (error) {
    console.log('error.message: ', error.message);
    return new Response("Failed to create a new user", { status: 500 });
  }
}
