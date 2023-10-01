"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/editor";




const ProductForm = () => {

  const [loading, setLoading] = useState(false)
  const [description, setDescription] = useState("");





  return (
    <div className="w-full">
      <form className="w-full grid grid-cols-3 gap-4 py-4">
        <div className="flex flex-col col-span-1 space-y-1">
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" name="title" placeholder="Title" />
        </div>
        <div className="flex flex-col col-span-2 space-y-1">
          <Label htmlFor="description">Description</Label>
          <Editor
            value={description}
            onChange={(value) => setDescription(value)}
          />
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <Label htmlFor="battery_image">Upload Battery Image</Label>
          <Input
            id="battery_image"
            name="battery_image"
            type="file"
            placeholder=""
          />
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <Label htmlFor="inverter_image">Upload Inverter Image</Label>
          <Input
            id="inverter_image"
            name="inverter_image"
            type="file"
            placeholder=""
          />
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <Label htmlFor="solar_panel_image">Upload Solar Panels Image</Label>
          <Input
            id="solar_panel_image"
            name="solar_panel_image"
            type="file"
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
};
export default ProductForm;
