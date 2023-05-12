import User from "@/models/user";
import { connectToDB } from "@/utils/database";

type User = {
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
}

export const POST = async (request: { json: () => PromiseLike<{ data: User }> | { data: User } }) => {

  const { data: { firstName, lastName, username, email, password } } = await request.json();

  try {
    await connectToDB();

    const newUser = new User({ firstName, lastName, username, email, password });

    const result = await newUser.save();

    return new Response(JSON.stringify(result), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a new user", { status: 500 });
  }
}
