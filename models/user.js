// import { Schema, model, models } from 'mongoose';
import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'firstName is required!'],
    match: [/^(?=.{2,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 2-30 alphanumeric letters and be unique!"]
  },
  lastName: {
    type: String,
    required: [true, 'lastName is required!'],
    match: [/^(?=.{2,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 2-30 alphanumeric letters and be unique!"]
  },
  username: {
    type: String,
    required: [true, 'username is required!'],
    match: [/^(?=.{2,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 2-30 alphanumeric letters and be unique!"]
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  password: {
    type: String,
    required: [true, 'password is required!'],
  },
});

// const User = models.User || model("User", UserSchema);
const User = model("User", UserSchema);

export default User;