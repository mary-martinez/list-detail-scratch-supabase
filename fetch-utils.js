const SUPABASE_URL = 'https://nxkfcrgevcuksvdnaugc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54a2ZjcmdldmN1a3N2ZG5hdWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NjAsImV4cCI6MTk1OTkxNzQ2MH0.9e3rnFUxMChSkwzJQcBImTDSwY_4VDtfmLDUZ-dY7gc';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchToys() {
    const resp = await client.from('toys').select('*');
    return checkError(resp);
}

export async function fetchItemByID(id) {
    const resp = await client.from('toys').select('*').eq('id', id).single();
    return checkError(resp);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
