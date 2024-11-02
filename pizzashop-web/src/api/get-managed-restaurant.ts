import { supabase } from "@/lib/supabaseClient";

interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await supabase.from('Restaurant').select('*')
  
  return response.data
}