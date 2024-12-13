export const createSlug = (str) => {
  return str.trim().toLowerCase().replace(/\s+/g, '-') 
}