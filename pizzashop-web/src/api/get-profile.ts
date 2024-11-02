import { api } from "@/lib/axios";
// import { supabase } from "@/lib/supabaseClient";

interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')
  // const response = await api.get<GetProfileResponse>('/User?select=*')
  // const response = await supabase.from('User').select('*')

  return response.data
}