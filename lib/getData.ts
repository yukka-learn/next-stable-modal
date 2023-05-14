export interface Character {
  _id: string;
  name: string;
  photoUrl: string;
}

export async function getDataSingle(id: string) {
  const res = await fetch(`https://api-blue-archive.vercel.app/api/character/${id}`);
  const data = await res.json();

  return data.data as Character;
}

export async function getDataSingleName(name: string) {
  const res = await fetch(`https://api-blue-archive.vercel.app/api/characters?name=${name}`);
  const data = await res.json();

  return data.data as Character;
}

export async function getData() {
  const res = await fetch("https://api-blue-archive.vercel.app/api/characters?page=3&perPage=20");
  const data = await res.json();

  return data.data as Character[];
}
