import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  console.log('request.json(): ', request.json());


  const { data: { firstName, lastName, username, email, password } } = await request.json();

  try {
    await connectToDB();
    const newUser = new User({ firstName, lastName, username, email, password });

    await newUser.save();
    return new Response(JSON.stringify(newUser), { status: 201 })
  } catch (error) {
    return new Response("Failed to create a new user", { status: 500 });
  }
}
