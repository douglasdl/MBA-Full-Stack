import { api } from "@/lib/axios";
// import { supabase } from "@/lib/supabaseClient";

interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  // const response = await supabase.from('Restaurant').select('*')
  const response = await api.get<GetManagedRestaurantResponse>('/managed-restaurant')

  return response.data
}