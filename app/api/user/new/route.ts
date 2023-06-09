import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (request: Request) => {

  const { data: { firstName, lastName, username, email, password } } = await request.json();

  try {
    await connectToDB();

    const newUser = new User({ firstName, lastName, username, email, password });

    const result = await newUser.save();

    return new Response(JSON.stringify(result), { status: 201 })
  } catch (error) {
    return new Response("Such email already exist", { status: 500 });
  }
}
