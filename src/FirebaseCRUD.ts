// ... (previous imports)

import { ref, get, set, remove, update, child, DataSnapshot } from 'firebase/database';
import FirebaseConfig from './FirebaseConfig';

const database = FirebaseConfig();



interface Data {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  dob: string;
  profile: string;
  country: string;
  gender: string;
  bloodGroup: string;
  email: string;
  phone: string;
  univ: string;
  degree: string;
  role: string;
}

const userPath = (email:string | null | undefined) => `User/${email?.split('.').join("-")}`;

async function CreateData(email:string, data: Data) {
  const dbRef = ref(database);
  try {
    const snapshot: DataSnapshot = await get(child(dbRef, userPath(email)));
    if (snapshot.exists()) {
      console.log('User already exists');
    } else {
      await set(ref(database, userPath(email)), data);
    }
  } catch (error) {
    console.error('CreateData error:', error);
    // alert('Error creating user');
  }
}

async function ReadData(email: string | null | undefined): Promise<Data | null> {
  const dbRef = ref(database);
  if(email !== "" || email !== null){
    try {
      const snapshot: DataSnapshot = await get(child(dbRef, userPath(email)));
      if (snapshot.exists()) {
        const userData: Data = snapshot.val();
        // alert(JSON.stringify(userData));
        return userData;
      } else {
        // alert('No data found');
        return null;
      }
    } catch (error) {
      console.error('ReadData error:', error);
      // alert('Error reading data');
      return null;
    }
  }
  return null
}

async function UpdateData(email: string, data: Data) {
  const dbRef = ref(database);
  try {
    const snapshot: DataSnapshot = await get(child(dbRef, userPath(email)));
    if (snapshot.exists()) {
      await update(ref(database, userPath(email)), data);
    } else {
      console.log('User does not exist');
    }
  } catch (error) {
    console.error('UpdateData error:', error);
    // alert('Error updating user');
  }
}

async function DeleteData(email: string) {
  const dbRef = ref(database);
  try {
    const snapshot: DataSnapshot = await get(child(dbRef, userPath(email)));
    if (snapshot.exists()) {
      await remove(ref(database, userPath(email)));
    } else {
      console.log('User does not exist');
    }
  } catch (error) {
    console.error('DeleteData error:', error);
    // alert('Error deleting user');
  }
}

export const Create = CreateData;
export const Read = ReadData;
export const Update = UpdateData;
export const Delete = DeleteData;
