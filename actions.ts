"use server"

import { revalidatePath } from "next/cache"
import {z} from "zod"
import { DataResponse, GeocodingResponse } from "./types"

export async function getSolarData(formData:FormData) {

  const schema = z.object({
    email: z.string().email(),
    address: z.string(),
    monthlyBill: z.coerce.number(),
    offGrid: z.coerce.boolean()
  })

  const data = schema.parse({
    email: formData.get('email'),
    address: formData.get('address'),
    monthlyBill: formData.get('monthlyBill'),
    offGrid: formData.get('offGrid')
  })

  try {


    const encodedAddress = encodeURIComponent(data.address);

    const gecodingUrl = new URL(
       `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
     );

      const response = await fetch(gecodingUrl)
       .then((res) => res.json())
       .then((data) => data)
       .catch((err) => console.log(err));

       const geocode: GeocodingResponse = await response;

       const { results, status } = geocode;

       if (status !== "OK") return;

        const {
       geometry: { location },
       formatted_address,
       place_id,
     } = results[0]

       const url = new URL(
       `https://solar.googleapis.com/v1/buildingInsights:findClosest?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
     );

     url.searchParams.append("location.latitude", location.lat.toString());
     url.searchParams.append("location.longitude", location.lng.toString());

      const res = await fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));

      const solar: DataResponse  = await res;

      if(!res.ok) {
        console.log('Error: ', res)
        return null;
      }

      if (solar.name === undefined) {
        console.log(solar)
        return null;
      } else {
        console.log("Solar Data: ", JSON.stringify(solar, null, 2));
      }

  } catch (error) {
    console.log(error)
  } finally {
    revalidatePath('/solar-potential')
  }


}
